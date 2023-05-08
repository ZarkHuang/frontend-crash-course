// 1.Declare a variable called age and show ‘can vote’ if age >= 18, show ‘can’t vote’
// if age < 18
let age = 20;
if ( age >= 18){
    console.log( "can vote" );
}else{
    console.log( "can vote" );
}

// 2.Check if a number is odd or even.
let even = 6;
if ( even % 2 == 0){
    console.log( 'The number is even' ); //The number is even.
}else{
    console.log( 'The number is odd');
}

// 3.Declare two variables and check which one is big or they’re equaled.
let num1 = 8;
let num2 = 8;
if ( num1 > num2){
    console.log("num1 is greater than num2");
}else if ( num1 == num2 ) {
    console.log("they’re equaled"); //they’re equaled.
}else{
    console.log("whatever");
}


// 4.Declare three variables and check which one is big or they’re equaled.
let a = 1;
let b = 2;
let c = 3;

if ( a > b  && a > c ){
    console.log('a老大')
}else if ( b > a && b > c ){
    console.log('b老大')
}else if ( c > a && c > b ){
    console.log('c老大') //c老大
}else{
    console.log('一樣小')
}


// 5.Declare two variables for range (ex. 10, 100), declare another number variable and check a number is present in given range
let numMid = 10;
let numMax = 100;
let numBomb = 87;
if ( numBomb > numMid && numBomb < numMax ){
    console.log( "in the range" );
}else{
    console.log( "not in the range" );
}


// 6.Declare a variable called year and check the year is leap year or not.
// 閏年：國曆才有 4的倍數是閏年，但100的倍數不是閏年，除非它也是400的倍數。
let year = 2023;

if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
    console.log(year + ' is a leap year');
} else {
    console.log(year + ' is not a leap year'); //2023 is not a leap year
}
