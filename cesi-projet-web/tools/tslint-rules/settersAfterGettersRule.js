"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Lint = require("tslint");
var tsutils = require("tsutils");
/**
 * Rule that enforces that property setters are declared after getters.
 */
var Rule = /** @class */ (function (_super) {
    __extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rule.prototype.apply = function (sourceFile) {
        return this.applyWithWalker(new Walker(sourceFile, this.getOptions()));
    };
    return Rule;
}(Lint.Rules.AbstractRule));
exports.Rule = Rule;
var Walker = /** @class */ (function (_super) {
    __extends(Walker, _super);
    function Walker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Walker.prototype.visitGetAccessor = function (getter) {
        if (getter.parent && tsutils.isClassDeclaration(getter.parent)) {
            var getterName = getter.name.getText();
            var setter = void 0;
            for (var i = 0; i < getter.parent.members.length; ++i) {
                var member = getter.parent.members[i];
                if (tsutils.isSetAccessorDeclaration(member) && member.name.getText() === getterName) {
                    setter = member;
                }
            }
            if (setter && setter.pos < getter.pos) {
                this.addFailureAtNode(setter, 'Setters must be declared after getters.');
            }
        }
        _super.prototype.visitGetAccessor.call(this, getter);
    };
    return Walker;
}(Lint.RuleWalker));
