"use strict";
function divideNumbers(num1, num2) {
    try {
        if (typeof num1 !== 'number' || typeof num2 !== 'number') {
            throw new Error("Can nang ko hop le");
        }
        if (num2 === 0) {
            throw new Error("Ko the chia cho 0");
        }
        let result;
        result = num1 / num2;
        console.log(result);
        return result;
    }
    catch (error) {
        console.log("Ket thuc ham divideNumbers");
    }
    finally {
    }
}
divideNumbers(10, 0);
