//immutable.js

const x = { foo: 'bar' };
const y = x;
y.foo = 'baz';
x === y; // true

const SomeRecord = Immutable.Record({ foo: null });
const x = new SomeRecord({ foo: 'bar' });
const y = x.set('foo', 'baz');
const z = x.set('foo', 'bar');
x === y; // false
x === z; // true