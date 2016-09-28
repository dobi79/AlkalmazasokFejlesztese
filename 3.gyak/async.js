/*setTimeout(function() {
    console.log(1);
}, 1000);

console.log(2);*/

function* gen() {
    const a = yield 1;
    const b = yield 2;
    yield a + b;
    return "sima";
}

console.log(it.next());
console.log(it.next(30));
console.log(it.next(12));