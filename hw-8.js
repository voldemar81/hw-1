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
   });
     return result;
   }
   
   const arr = [3, 4, 1, 9];
   
   console.log(getResult(arr,sum)); 
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
   
    const users = [
        {name: 'Jon', age: 22},
        {name: 'Richard', age: 18},
        {name: 'Anton', age: 32},
        {name: 'Lida', age: 23},
        {name: 'Bob', age: 44}
    ]; 
    
     
  const arr = users.sort((a,b) => a.age - b.age);
  console.log(arr);
  // mission 2

  function reversArr(arr) {
    arr.reverse();
    console.log(arr);
  }
  function NumberArr(arr) {
    arr = arr.filter(item => !isNaN(item));
    arr = arr.map(Number);
    console.log(arr);
  }
  function each(arr, callback) {
    callback(arr);
  }
  const arr = [1, '4', 9, 'two'];
  each(arr, reversArr);
  
  const arr = [1, '4', false, 9, 'two'];
  each(arr, NumberArr);
  //mission 3

 let timer = setInterval(() => console.log(new Date()), 3000);
 setTimeout(() => { clearInterval(timer); console.log('30 секунд прошло'); }, 30000);
 //mission 4

  function calling() {
    console.log('Звоню!')
  };
  function beeps(callback) {
    setTimeout(() => {
        console.log('Идут гудки...')
        callback();
    }, 1000);
    
  }
  function talk() {
    console.log('Разговор')
  }
  calling();
  beeps(talk);
 // mission 5