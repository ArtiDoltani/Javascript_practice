var p1=document.getElementById("p1");
p1.innerHTML="changed";
// Creating new p tag Element

var create_newtag=document.createElement("p");
create_newtag.innerHTML="new tag is created";
document.getElementById("p1").appendChild(create_newtag);


//timer  program 1
// function timerfor5s(){
// alert("this is a 5 sec");
// }
// setTimeout(timerfor5s,5000);


//  program 2 for images

// var myimage=document.getElementById("image");
// var img_array=["images/1.jpg","images/2.png","images/download.png"];
// var ind=0;


// function imageprog(){
//     myimage.setAttribute('src',img_array[ind]);
//     ind++;

//     if(myimage>=img_array.length){
//       ind=0;
//     }
// }
// setInterval(imageprog,3000);

//  <====Difference between function with parenthesis and without parenthesis=====>
// program with parenthesis

function add(){
return 5;
}
console.log(add());

// program without parenthesis

function add(){
    return 5;
    }
    console.log(add);

//Function assign to a variable

// if we call this function here before declarartion it will generate  error
//console.log(sub(5,4));
var sub= function(x,y){
    return x-y;
    }
  console.log(sub(5,4));  //this will work perfect

// Normal Function 

// if we call this function here before declearartion it will not generate  error
console.log(add(5,4));
function add(x,y){
    return x+y ;
    }
    //console.log(add(5,4)); //in this function both  will work perfectly



    // <=======JS Callback Functions===>
     var animals=['dog','cat','rat'];
     animals.forEach(function(val)
     {
         console.log(val);
     }
     )

     // This keyword

     var firstName; // global variable
     var lastName;   // global variable
     console.log(firstName);
     console.log(lastName);
    var Second= function(firstName,lastName){
      console.log(this.firstName=firstName);
      console.log(this.lastName=lastName);
     }

    Second("Arti","Doltani");
    console.log(firstName);
    console.log(lastName);





    
    
  



