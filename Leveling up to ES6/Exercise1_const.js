//===> Program to append negative numbers 
const negativeNumbers = [];

function extractNegativeNumbers(numbers)
 {
    // append any negative numbers found in the numbers array 
    // into the negativeNumbers array constant variable above
   for(let i=0; i<numbers.length;i++)
   {
    if ( numbers[i]<0)
    {
       negativeNumbers.push(numbers[i]);
    }
}
console.log(negativeNumbers);
    
}
extractNegativeNumbers([1,2,-5,5,7,-8,-1]);
