// var p = document.createElement('p');
// p.innerText = 'Textul care trebuie sa apara in paragraf';
// p.id = 'myParagraph';
// p.classList.add('clase', 'de', 'css');

// document.container.appendChild(p);

const $p = $('<p>', {
  text: 'Textul care trebuie sa apara in paragraf',
  id: 'myParagraph',
  class: 'clase de css',
});

const $msg = $('<p>', {
  id: 'message',
  text: 'Parola nu trebuie sa fie mai mica de 5 caractere',
});

const $container = $('.container');
$p.appendTo($container);

$container.append($msg);

setTimeout(function () {
  $msg.addClass('error');
}, 5000);

$('<span>', {
  id: 'exemple',
  text: 'ParolaMea',
}).appendTo($msg);

$('<h2>', {
  text: 'Mesaje',
}).prependTo($container);
