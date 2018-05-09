// console.log(Math.random());
// console.log(Math.ceil(1.1));
// console.log(Math.floor(1.9));
// console.log(Math.round(1.4));

function getRandom(n) {
    return Math.floor(Math.random() * (n + 1))
}

function getRandom2(x, y) {
    // return getRandom(y - x) + x;
    return Math.floor(Math.random() * (y - x + 1)) + x;
}

console.log(getRandom2(1, 3));
