// Quiz 5
function underscore (strings, ...values) {
    return strings[0].replace(/\s/g, '_');
}
 
const message = underscore`there      is no cow level`
 
console.log(message);


