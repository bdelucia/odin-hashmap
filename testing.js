import { HashMap } from './hashMap.js';

const test = HashMap();

test.set('apple', 'red');
test.set('banana', 'yellow');
test.set('carrot', 'orange');
test.set('dog', 'brown');
test.set('elephant', 'gray');
test.set('frog', 'green');
test.set('grape', 'purple');
test.set('hat', 'black');
test.set('ice cream', 'white');
test.set('jacket', 'blue');
test.set('kite', 'pink');
test.set('lion', 'golden');

console.log(test.entries());
test.set('apple', 'green');
console.log(test.entries());
test.set('orange', 'orange');
console.log(test.entries());
console.log(test.get('apple'));
console.log(test.has('apple'));
test.remove('apple');
console.log(test.get('apple'));
console.log(test.has('apple'));
console.log('Entries: ', test.entries());
console.log('Length: ', test.length());
console.log('Keys: ', test.keys());
console.log('Values: ', test.values());
console.log('Entries: ', test.entries());
test.clear();
console.log('After clear(): ', test.entries());
