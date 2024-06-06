"use strict";
let myFirstPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Success!");
    }, 1000);
});
myFirstPromise
    .then((data) => {
    console.log(data);
    console.log(`Result! ${data}`);
});
