var p1=document.getElementById("p1");
p1.innerHTML="changed";
// Creating new p tag Element

var create_newtag=document.createElement("p");
create_newtag.innerHTML="new tag is created";
document.getElementById("p1").appendChild(create_newtag);


//timer 
function timerfor5s(){
alert("this is a 5 sec");
}
setTimeout(timerfor5s,5000);