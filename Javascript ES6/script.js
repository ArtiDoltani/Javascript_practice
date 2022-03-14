// Template String
console.log("<=====Template String=====>")
function check(firstname,LastName)
{
    console.log(`Hello  ${firstname}  ${LastName}`);

}
check("Arti","Doltani");


// // Another Example function 
function SendEmail(firstname)

{
    var shipping =240;
console.log(
`hi ${firstname} , thanku for purchasing,
                Shipping= ${shipping}   `


)
}
SendEmail("Arti");

//Spread Operators
console.log("<=====Spread Operators=====>")
var mobiles = ["vivo", "Samsung","iPhone"];
var homeElectronics=["TV","fridge"];
var Electronics=["Desktop","laptop"];
// Below it will create an array 
var Electronics=["Desktop",mobiles,homeElectronics,"laptop"];
// Below using 3 dots it will show all items in  single array
//var Electronics=["Desktop", ...mobiles,...homeElectronics,"laptop"];

console.log(Electronics);


// var a=[10,20,30];
// var b=a;  
// //a[0]=60;
// console.log(a);
// console.log(b);
// // Here it will copy values of a if we change value of a[0] it will also change b[0] to avoid that we use 
// // spread operators that will copy only values instead of reference.
// var b=[...a]; // 
// a[0]=60;
// console.log(a);
// console.log(b);


// <=====OBJECT LITERALS=====>
console.log("<=====OBJECT LITERALS=====>")
var sound={
    alarm(times){
        console.log("Beep".repeat(times))
    }, 
    ringtone(times){
        console.log("Song".repeat(times))
    }}

console.log(sound.alarm(3));
console.log(sound.ringtone(2));

// ====> DESTRUCTURING IN JS
// let [c,d]=[23,345];
// console.log(c,d);


// ====> ARRAY DESTRUCTURING 
// let [c,d,...e]=[23,345,1,1,2,3,4]; //here all remaining items will be considered in e this is called destructuring
// console.log(c,d,e);

( {a,b,c,...d}={a:20,b:30,c:40,d:50,e:60})
// console.log(a,b,c,d);

// ====>OBJECT DESTRUCTURING

const laptop={
model:"hp" ,
year:2022,
start: function(){ console.log("Started");}
}
const {model,year,start}=laptop;
console.log(model,year,start);
start();
