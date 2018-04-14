// @flow

type Foo = number;
type Bar = boolean;

const foo: Foo = 5;
const bar: Bar = true;
const baz = 'potato';

export default () => {
  return bar ? foo : baz;
};
