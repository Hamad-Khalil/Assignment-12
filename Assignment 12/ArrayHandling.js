// 1. Write a js program to read and print elements of array.

// let arr=[1,2,3,4,5,5,5]
// for (let i= 0; i< arr.length; i++){
//     console.log(arr[i]);
// }


// 2. Write a js program to print all negative elements in an array.

// let arr= [1,-1,2,-2,3,-3,4,-4,5,-5,6,-6]
// for(let i= 0; i<= arr.length; i++){
//    if(arr[i]<0){
//     console.log(arr[i]);
//    }
// }

// 3. Write a js program to find sum of all array elements. 

// let arr=[1,2,3,4]
// let sum=0
// for ( let i=0; i< arr.length; i++){
//     sum= sum + arr[i]
// }
// console.log(sum);

// 4. Write a js program to find maximum and minimum element in an array.
// let arr=[48,125,659,15,56,14,70]
// console.log(Math.max(...arr), "is the maximum number");
// console.log(Math.min(...arr), "is the minimum number");

// 5. Write a js program to find second largest element in an array.
// let arr=[48,125,659,15,56,14,70]
// for(let i=0; i<arr.length; i++){

// }

// 6. Write a js program to count total number of even and odd elements in an array.
// let arr=[48,125,659,15,56,14,70]
// let totEvenNum=[]
// let totOddNum=[]
// for( let i=0; i<arr.length; i++){

//     if( arr[i]%2 == 0){
//         totEvenNum.push(arr[i])
//     } else { totOddNum.push(arr[i])}
// }
// console.log(totEvenNum.length , 'are even numbers');
// console.log(totOddNum.length , "are odd numbers");


// 7. Write a js program to count total number of negative elements in an array.
// let arr= [1,-1,2,-2,3,-3,4,-4,5,-5,6,-6]
// let negativeElement=[]
// for (let i = 0; i < arr.length; i++) {
//   if( arr[i]<0){
//     negativeElement.push(arr[i])
//   }
// }
// console.log(negativeElement.length, 'are negative elements');


// 8. Write a js program to copy all elements from an array to another array.
// let arr= [1,-1,2,-2,3,-3,4,-4,5,-5,6,-6]
// let secArry= arr
// console.log(secArry);


// 9. Write a js program to insert an element in an array.

// let arr= [1,-1,2,-2,3,-3,4,-4,5,-5,6,-6]
// //  to insert a number in the end of arry
// arr.push(7)
// // to insert a number in the start of arry
// arr.unshift(0)

// console.log(arr);
// 10. Write a js program to delete an element from an array at specified position.
// let arr=[48,125,659,15,56,14,70]
// // to delete an element from an arry put index number and number of next element to remove
// arr.splice(1,3)                 //to remove 125, 659, and 15
// console.log(arr);


// 11. Write a js program to count frequency of each element in an array.

// 12. Write a js program to print all unique elements in the array.

// 13. Write a js program to count total number of duplicate elements in an array.

// 14. Write a js program to delete all duplicate elements from an array.

// 15. Write a js program to merge two array to third array.

// 16. Write a js program to find reverse of an array.

// let arr= [1,-1,2,-2,3,-3,4,-4,5,-5,6,-6]
// let reverseOfArr= arr.reverse()
// console.log(reverseOfArr);


// 17. Write a js program to put even and odd elements of array in two separate array.
// let arr=[48,125,659,15,56,14,70]
// let totEvenNum=[]
// let totOddNum=[]
// for( let i=0; i<arr.length; i++){

//     if( arr[i]%2 == 0){
//         totEvenNum.push(arr[i])
//     } else { totOddNum.push(arr[i])}
// }
// console.log(totEvenNum, 'are Even numbers in above array');
// console.log(totOddNum, 'are Odd numbers in above array');

// 18. Write a js program to search an element in an array.

let regNum=[ 428,649,135,034,761]
// let suppose we has to search a specfic number
console.log(regNum.find(element => element >700));

// 19. Write a js program to sort array elements in ascending or descending order.

// 20. Write a js program to sort even and odd elements of array separately.

// 21. Write a js program to left rotate an array.

// 22. Write a js program to right rotate an array.