function mult(a,b) {
    return a*b;
   }
   
   function sum(a,b) {
       return a+b;
   }
   
   function getResult(arr,callback) {
   const result = arr.reduce((resultValue,currentValue)=> {
       const currentResult = callback (resultValue,currentValue)
       return currentResult;
   })
     return result;
   }
   
   const arr = [3, 4, 1, 9];
   
   console.log(getResult(arr,sum)); console.log(findWord(animals,'ко'));
   console.log(getResult(arr,mult));
   // mission 1
   
   function mult(arr) {
       result = arr[0] * arr[1] * arr[2] * arr[3];
       console.log(result);
     }
     function sum(arr) {
       result = arr[0] + arr[1] + arr[2] + arr[3];
       console.log(result);
     }
     function getResult(callback, arr) {
       callback(arr);
     }
     const arr = [3, 4, 1, 9];
     getResult(mult, arr);
     getResult(sum, arr);
     //mission 1.1
   