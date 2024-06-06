"use strict";
function findElement(arr, number) {
    let promise = new Promise((resolve, reject) => {
        resolve(arr);
    });
    promise.then((data) => {
        let element = data.findIndex((item) => item === number);
        if (element == -1) {
            console.log(`Khong tim thay phan tu ${number}`);
            return;
        }
        console.log(element);
        console.log(`Phan tu thu ${data[element]} duoc tim thay o vi tri ${element}`);
    });
}
findElement([1, 2, 3, 4, 5], 7);
