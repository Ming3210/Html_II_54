function sumWithPromise(arr:number[]){
    let result:number = 0
    let promise = new Promise((resolve, reject) =>{
        resolve(arr[0])
    })
    promise
    .then((data:any)=>{
        return new Promise((resolve, reject) =>{
            result = result + data
            resolve(arr[1])
        })
    })

    


    .then((data:any)=>{
        return new Promise((resolve, reject) =>{
            result = result + data
            resolve(arr[2])
        })
    })
    .then((data:any)=>{
        return new Promise((resolve, reject) =>{
            result = result + data
            resolve(arr[3])
        })
    })
    .then((data:any)=>{
        return new Promise((resolve, reject) =>{
            result = result + data
            resolve(arr[4])
        })
    })
    .then((data:any)=>{
        return new Promise((resolve, reject) =>{
            result = result + data
            resolve(arr[5])
        })
    })
    .then((data:any)=>{
        return new Promise((resolve, reject) =>{
            result = result + data
            resolve(arr[6])
        })
    })
    .then((data:any)=>{
        return new Promise((resolve, reject) =>{
            result = result + data
            console.log(result);
            resolve(arr[7])
        })
    })
    
}
sumWithPromise([1,2,3,4,5,6,7])