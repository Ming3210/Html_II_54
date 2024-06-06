"use strict";
function sumWithPromise(arr) {
    let result = 0;
    let promise = new Promise((resolve, reject) => {
        resolve(arr[0]);
    });
    promise
        .then((data) => {
        return new Promise((resolve, reject) => {
            result = result + data;
            resolve(arr[1]);
        });
    })
        .then((data) => {
        return new Promise((resolve, reject) => {
            result = result + data;
            resolve(arr[2]);
        });
    })
        .then((data) => {
        return new Promise((resolve, reject) => {
            result = result + data;
            resolve(arr[3]);
        });
    })
        .then((data) => {
        return new Promise((resolve, reject) => {
            result = result + data;
            resolve(arr[4]);
        });
    })
        .then((data) => {
        return new Promise((resolve, reject) => {
            result = result + data;
            resolve(arr[5]);
        });
    })
        .then((data) => {
        return new Promise((resolve, reject) => {
            result = result + data;
            resolve(arr[6]);
        });
    })
        .then((data) => {
        return new Promise((resolve, reject) => {
            result = result + data;
            console.log(result);
            resolve(arr[7]);
        });
    });
}
sumWithPromise([1, 2, 3, 4, 5, 6, 7]);
