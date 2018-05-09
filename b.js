function print() {
    for(let i = 1; i <= 100; i++) console.log(i);
}

// print();

function total(n) {
    let tong = 0;
    for(let i = 1; i <= n; i++) tong += i;
    return tong;
}

console.log(total(10));
