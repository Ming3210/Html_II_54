function calculateBMI(weight:any, height:number):number|string{
    try {
        if (typeof weight !== 'number') {
            throw new Error("Can nang ko hop le");
        }
        let result:number
        result = Math.round(weight/(height**2)*100)/100
        console.log(result);
        
        return result
    } catch (error) {
        console.log("Can nang ko hop le");
        return "Can nang ko hop le"
        
    }
}

calculateBMI("70",1.75);