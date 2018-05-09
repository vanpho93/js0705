function inSoChan() {
    for(let i = 0; i <= 100; i += 2) console.log(i);
}

function inSoLe() {
    for(let i = 1; i <= 100; i += 2) console.log(i);
}

function inSoChia3Du1() {
    for(let i = 1; i <= 100; i += 3) console.log(i);
}

function inSoChinhPhuong() {
    // for(let i = 1; i <= 10; i++) console.log(i * i);
    for(let i = 0; i <= 100; i++) {
        if (Math.sqrt(i) % 1 === 0) {
            console.log(i);
        }
    }
}
inSoChinhPhuong();
// Math.sqrt(100)
