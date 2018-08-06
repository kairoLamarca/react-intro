// app.js
import { add } from './math.js';
console.log(add(16, 26)); // 42

// math.js
export function add(a, b) {
    return a + b;
}

//--------------
function add(a, b) {
    return a + b;
}

console.log(add(16, 26)); // 42