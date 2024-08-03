function add(a, b) {
    return a + b;
}

// Warm-up loop to trigger JIT compilation
for (let i = 0; i < 1000000; i++) {
    add(1, 2);
}

console.time("JIT");
for (let i = 0; i < 1000000; i++) {
    add(1, 2);
}
console.timeEnd("JIT");
