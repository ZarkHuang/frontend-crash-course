// Declare a arrow function called isEven, should pass a number variable and should return the result if is even return true
// 聲明一個名為 isEven 的箭頭函數，應該傳遞一個數字變量，如果偶數返回 true，則應該返回結果

let isEven=( num )=>{
  if( num % 2 ==0){
    return true;
  }else{
    return false;
  }
  }
  console.log(isEven(100)); //ture;


// Declare a arrow function called isLeapYear, should pass a number variable and should return the result if is leap year return true

let isLeapYear = ( year ) => {
  if(( year%4==0 && year%100 !=0 ) || (year%400 ==0 )){
    return true;
  }else{
    return false;
  }
}
console.log(isEven(2023)); //false;



// Declare a arrow function called isPrime, should pass a number variable and should return the result if is prime number return true


let test = (n) => {
  // 判斷一個數是否能被自身小的正整數(除開1和自身)整除.如果能整除則不是質數,否則反之.
  for(var k = 2;k < n;k++) {
    if(n % k === 0) {
      return false;    
    }           
  }
  return true;         
}

console.log( test(13) );



// Declare a arrow function called findMax, should pass 3 number variables and should return the max number of them.
let findMax = (num1, num2, num3) => {
  if (num1 > num2 && num1 > num3) {
    return num1 + "----" +'is the biggest';
  } else if (num2 > num1 && num2 > num3) {
    return num2 + "----" +'is the biggest';
  } else if (num3 > num1 && num3 > num2) {
    return num3 + "----" +'is the biggest';
  }
}
console.log(findMax(1, 2, 3));