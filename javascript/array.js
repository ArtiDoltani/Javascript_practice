let arr=[5,6,8,9]
// foreach loop
// arr.forEach((value,index,array) => {
//    function logic
   
// });
arr.forEach((element) => {
    console.log(element*element);
   
});
//Array from
let name="Arti";
let arr1=Array.from(name)
console.log(arr1)

//For of loop
for(let i of arr){
    console.log(i)
}
//For in loop
for(let i in arr){
    console.log(arr[i])
}
// Array map method
// same syntax as for each but it creates a new array
let a=arr.map((value,index)=>{
    console.log(value,index)
    return value+index
    
})
console.log(a)

// Array filter method
// filters an array with  values that pass a test it creates a new array
let arr2=[5,64,8,90]
let b=arr2.filter(value=>{
    return value>10
}
)
console.log(b)

// these above functions do not modify our orignal array
// Array Reduce method reduces an array to single value
let arr3=[5,2,1,90]
let s=arr3.reduce((val1,val2)=>{
 return val1 + val2
})
console.log(s)

//we can also create a function and pass that function in this way
let arr4=[5,2,1,6]
const reduce_func=(val1,val2)=>{
    return val1 + val2
   }
newarr= arr4.reduce(reduce_func)
console.log(newarr)