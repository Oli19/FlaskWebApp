window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const alexa = new SpeechRecognition();
const przycisk = document.querySelector('input')

function listen() {
    console.log("Działam")
}



alexa.addEventListener('result', listen)
przycisk.addEventListener('click', () => alexa.start() )