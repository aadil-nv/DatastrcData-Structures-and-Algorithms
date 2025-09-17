// function fib(n, a = 0, b = 1) {
//     if (a <= 100) {
//         console.log(a);
//         fib(n, b, a + b);
//     }
// }

// fib(100);


// function factorial(n) {

//     if (n === 0 || n === 1) {
//         return 1;
//     }

//     return n * factorial(n - 1);
// }

// const number = 5;
// const result = factorial(number);
// console.log(`Factorial of ${number} is ${result}`); 



// function removeArrayElement(arr,index=0,seen={}){
//     if(index ===arr.length) return arr;
//     console.log("seen is ==>",seen)
//     if(seen[arr[index]]){
//         arr[index]=arr[arr.length-1]
//         arr.length--
//         return removeArrayElement(arr,index,seen)
//     }
//     seen[arr[index]] = true
//     return removeArrayElement(arr,index+1,seen)
    
// }

// let arr =[1,2,3,4,5,5]
// console.log(removeArrayElement(arr))



// function reverseString(str,index=str.length-1,reversed=""){
//     if(index < 0) return reversed
//     reversed+=str[index]
//     return reverseString(str,index-1,reversed)
// }
// let str = "my name is aadil"
// console.log(reverseString(str))



function isPalindrom(str,index=str.length-1,reversed=""){
    if(index < 0) return str === reversed;
    reversed+=str[index]
    return isPalindrom(str,index-1,reversed)
}
// let str = "aadil"
let str = "mom"

console.log(isPalindrom(str))