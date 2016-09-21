"use strict";

//Ctrl + Shift + P -> command= "node"  task = "${file}"
// Ctrl + Shift + B -> Build
//Ctrl + ö terminal

//var, let, const
const szamok = [2, 3, -2, 3, 6, 7];

function kivalogatas(arr, tulFn) {
    const result = [];
    for (var i = 0; i < arr.length; i++) {
        if(tulFn(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
}

console.log(kivalogatas(szamok, function(p) {
    return p < 0;
}));


console.log( szamok.filter(function negativE(p){
    return p < 0;
}));

console.log( szamok.filter( p => p < 0));