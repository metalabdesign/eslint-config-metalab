import React from 'react';

const Child = () => (
  <span>Hello</span>
);

const Test = () => (
  <div>
    <Child
      a
      b
    />
  </div>
);

(<Test/>);
