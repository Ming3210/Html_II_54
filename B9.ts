function sortArrayWithPromise(arr:number[]){
    let promise = new Promise((resolve, reject) =>{
        resolve(arr)
    })
   
        promise.then((data) =>{
          
            for (let i = 0; i < arr.length; i++) {
                for (let j = 0; j < arr.length - 1 - i; j++) {
                    if (arr[j] > arr[j + 1]) {
                        let temp = arr[j];
                        arr[j] = arr[j + 1];
                        arr[j + 1] = temp;
                    }
                }
            }
            console.log( data);
            return data;
        })
    }


sortArrayWithPromise([1,7,2,5,9,5])