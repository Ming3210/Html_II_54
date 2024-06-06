"use strict";
function countDown(number) {
    let promise = new Promise((resolve, reject) => {
        resolve(number);
    });
    for (let i = number; i >= 1; i--) {
        promise = promise.then(() => {
            console.log(i);
            if (i == 1) {
                console.log("Hoan thanh qua trinh dem");
                return;
            }
            return new Promise((resolve) => { setTimeout(resolve, 1000); });
        });
    }
}
countDown(5);
