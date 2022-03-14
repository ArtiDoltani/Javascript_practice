// =====> Generators
// Generator means on the fly values should be generated when we want.
// Syntax 
// function* numbersGen(){
//  let i=0;

//  yield 1;
//  yield 2;
//  yield 3;

// }
//  const gen=numbersGen();
//  console.log(gen.next());
//  console.log(gen.next());

// to reduce code of line 
function* numbersGen(){
    let i=0;
    while(true)
    yield i++; 
   }
    const gen=numbersGen();
    console.log(gen.next());
    console.log(gen.next().value); // if want only value
