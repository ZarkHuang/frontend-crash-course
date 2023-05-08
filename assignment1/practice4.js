// Show 1 to 10000

function prtintNum(){
  for (let i = 1; i <= 10000; i++) {
    console.log(i)
  }
}


// Show 1 to 100 even numbers


function evenNum(){
  for (let i = 1; i <= 100; i++) {
    if ( i%2 == 0 ){
      console.log(i);
    }
  }
}
// evenNum();


// Show 1 to 100 odd numbers

function oddNum(){
  for (let i = 1; i <= 100; i++) {
    if ( i%2 == 1 ){
      console.log(i);
    }
  }
}
// oddNum();



// Show 1 to 100 prime numbers
// 质数是指在大於1的自然數中，除了1和它本身以外不再有其他因數的自然數。


for (let i = 2; i <= 100; i++) {
  //獲取2-i的所有數
  let isPrime = true;
  for (let j = 2; j < i; j++) {
    //判斷i能否被整除
    if (i % j == 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    console.log(i);
  }
}

// Declare a variable called size and show the height of size triangle 

for (let i=0;i<10;i++){
  let star = "";
  for(let j=0;j<2*i+1;j++){
    star+="*";
  }
  console.log(star);
}


// Show Multiplication Table (from 1*1 to 9*9)
for (let i=1;i<=9;i++){
  for(let j=1;j<=9;j++){
    console.log(i + "*" + j + "=" + i * j)
  }
}