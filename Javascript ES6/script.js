// Template String
function check(firstname)
{
    console.log(`Hello  ${firstname}  ${LastName}`);

}
check("Arti","Doltani");


// Another function 
function SendEmail(firstname)

{
    var shipping =240;
console.log(
`hi ${firstname} , thanku for purchasing,
                Shipping= ${shipping}   `


)
}

//Spread Operators
var mobiles = ["vivo", "Samsung","iPhone"];
var homeElectronics=["TV","fridge"];
var Electronics=["Desktop","laptop"];
// Below it will create an array 
var Electronics=["Desktop", mobiles,homeElectronics,"laptop"];
// Below using 3 dots it will show all items in  single array
//var Electronics=["Desktop", ...mobiles,...homeElectronics,"laptop"];

console.log(Electronics);


// <=====OBJECT LITERALS=====>
var sound={
    alarm(times){
        console.log("Beep".repeat(times))
    }, 
    ringtone(times){
        console.log("Song".repeat(times))
    }}

console.log(sound.alarm(3));
console.log(sound.ringtone(2));




