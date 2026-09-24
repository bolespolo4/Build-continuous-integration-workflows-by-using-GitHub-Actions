// Dummy Node.js application for testing GitHub Actions workflows

function greet(name) {
    return `Hello, ${name}!`;
}

function add(a, b) {
    return a + b;
}

module.exports = {
    greet,
    add
};