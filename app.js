const cowsay = require('cowsay');
const owoifyx = require('owoifyx').default;
const dialog = owoifyx('Hello how are you?');

const msj = cowsay.say({
    text : dialog,
    e : "OO",
    T : "U"
});

console.log(msj);