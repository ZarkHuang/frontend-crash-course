// 1.Declare a array called fruits with some fruits in default.
let fruits = ["apple", "orange", "banana", "pineapple", "grape"];

// 2.Print every element in the fruits array declared above.
console.log(fruits);

// 3.Modify the thirth fruit to Durian and print the fruits array.
fruits.splice(2, 1, "durian");
console.log(fruits);

// 4.Using push method to add two fruits into array.
fruits.push("pawpaw", "watermelon");
console.log(fruits);
// ['apple', 'orange', 'durian', 'pineapple', 'grape', 'pawpaw', 'watermelon']

// 5.Remove the first fruit from the array.
fruits.shift();
console.log(fruits);
//['orange', 'durian', 'pineapple', 'grape', 'pawpaw', 'watermelon']

// 6.Using for, while loop to print the element in the fruits array.
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// 7.Declare a array called numbers and set each element to its squared using map.
{
  const numbers = [1, 2, 3, 4, 5];
  let pow = numbers.map((i) => {
    return Math.pow(i, 2);
  });
  console.log(pow); // [1, 4, 9, 16, 25]
}

// 8.Declare a array called numbers and filter the prime number using filter.
{
  const numbers = [4,5,9,11,15,20,25,36];

  function isPrime(num){
    for (let i = 2 ; i < num; i++) {
        if( num%i == 0){
            return false;
        }
    }
    return num > 1;
  }

  console.log( numbers.filter(isPrime)); //[5, 11]
}

// 9.Declare a array called numbers and computed the sum of the elements using reduce.
{

    const numbers = [4,5,9,11,15];
    let sum = numbers.reduce(function(total , i){
        return total+i;
    })

    console.log( sum ); //44
    
}