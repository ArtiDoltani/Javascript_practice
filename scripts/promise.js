function func1() {
    return new Promise(function(resolve,reject) {
        setTimeout(() => {
        const error=true;
        if(!error){
                console.log("Function: Your promise has been resolved")
                    resolve(); }
else{

    console.log("Function : Your promise has been rejected");
 reject("Sorry not fulfilled");
}

}, 3000);
 }) }
 //here using then func means if func1 is resolved then resolve function shhould be called.
 func1().then(
function(){
    console.log("Arti: thanks for resolving");} 
    ).catch(function(error){
            console.log("not resolved Reason: "+ error)
        }
    )





 