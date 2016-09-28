

function waitFor(ms){
    return new Promise(function (resolve, reject){
        setTimeout(resolve, ms);
    });
}

//waitFor(1000).then(() => console.log(1)); //then resz csak akkor ha resulve lefutott
//waitFor(1000)
//    .then(() => console.log(1))
//    .then(() => console.log(3));
waitFor(1000)
    .then(() => {
        return 7; //köv then felhasználja a visszatérési értéket call back hell
    })
    .then(() => console.log(3));
console.log(2);