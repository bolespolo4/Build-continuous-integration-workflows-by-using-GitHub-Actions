// Test script for the dummy Node.js project

const assert = require('assert');
const { greet, add } = require('./index');

assert.strictEqual(greet('GitHub Actions'), 'Hello, GitHub Actions!');
assert.strictEqual(add(2, 3), 5);

console.log('All tests passed!');