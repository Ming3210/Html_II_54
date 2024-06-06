"use strict";
function isPrimeWithPromise(num) {
    let promise = new Promise((resolve, reject) => {
        resolve(num);
    })
        .then(() => {
        let count = 0;
        for (let i = 1; i <= num; i++) {
            if (num % i == 0) {
                count++;
            }
        }
        if (count == 2) {
            console.log(true);
        }
        else {
            console.log(false);
        }
    });
}
isPrimeWithPromise(7);
