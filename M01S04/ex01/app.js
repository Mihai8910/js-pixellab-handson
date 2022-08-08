var value = window.prompt('introdu o valoare');
var message = '';
var messageParagraph = document.getElementById('message');

console.log('Valoarea este: ' + value);

if (value % 2 === 0) {
  message = 'Numarul este par';
} else {
  message = 'Numarul este impar';
}

console.log(message);
messageParagraph.innerText = message;
