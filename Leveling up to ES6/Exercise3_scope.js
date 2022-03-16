//Given Quiz
const userIds = [1, 2, 3];
const users = [];

// TODO: Fix this for loop by scoping the variable i.
// Do not use a IIFE to get to pass.
// HINT - remember how let and const work with block scope.
for (var i = 0; i < userIds.length; i++) {
    fun(function() {
        users.push({
            userId: userIds[i]
        });
    });
}

function fun(cb) { setTimeout(cb) };
//Solved Quiz 
// used LET instead of var
for (let i = 0; i < userIds.length; i++) {
    fun(function() {
        users.push({
            userId: userIds[i]
        });
    });
}
function fun(cb) { setTimeout(cb) };