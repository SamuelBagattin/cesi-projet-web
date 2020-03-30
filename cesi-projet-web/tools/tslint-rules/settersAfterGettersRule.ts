import * as Lint from 'tslint';
import * as tsutils from 'tsutils';
import * as ts from 'typescript';

/**
 * Rule that enforces that property setters are declared after getters.
 */
export class Rule extends Lint.Rules.AbstractRule {
    public apply(sourceFile: ts.SourceFile): Lint.RuleFailure[] {
        return this.applyWithWalker(new Walker(sourceFile, this.getOptions()));
    }
}

class Walker extends Lint.RuleWalker {
    public visitGetAccessor(getter: ts.GetAccessorDeclaration) {
        if (getter.parent && tsutils.isClassDeclaration(getter.parent)) {
            const getterName = getter.name.getText();
            let setter: ts.SetAccessorDeclaration | undefined;

            for (let i = 0; i < getter.parent.members.length; ++i) {
                const member = getter.parent.members[i];

                if (tsutils.isSetAccessorDeclaration(member) && member.name.getText() === getterName) {
                    setter = member;
                }
            }

            if (setter && setter.pos < getter.pos) {
                this.addFailureAtNode(setter, 'Setters must be declared after getters.');
            }
        }

        super.visitGetAccessor(getter);
    }
}
