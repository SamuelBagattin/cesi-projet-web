import { ToPriorityClassColorPipe } from './to-color.pipe';

describe('ToColorPipe', () => {
  it('create an instance', () => {
    const pipe = new ToPriorityClassColorPipe();
    expect(pipe).toBeTruthy();
  });
});
