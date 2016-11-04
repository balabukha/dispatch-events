var event = new Event('click'); // на элементе должно быть уже установлено событие и мы его вызываем.
var elem = document.getElementById('elem');

// elem.dispatchEvent(event); // функчий которая запускает событие автоматом

// -------------------------------------------

var rabbit = document.getElementById('rabbit');

function hide() {
    var event = new Event('hide', {
        cancelable: true
    });
    if (!rabbit.dispatchEvent(event)) {
        alert('дуйствие отменено');
    } else {
        rabbit.hidden = true;
    }
}

rabbit.addEventListener('hide', function(event) {
    if (confirm('вызвать preventDefault?')) {
        event.preventDefault();
    }
});

// setTimeout(hide, 2000);