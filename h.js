// function getLog() {
//     return console.log;
// }

// // console.log(getLog());
// getLog()(123);

function doSth(fn) {
    fn(1);
}

doSth(console.log);
