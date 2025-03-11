let spinnerEl = document.getElementById("spinner");
let RANDOM_QUOTE_API_URL = "https://apis.ccbp.in/random-quote";
let speedTypingTestEl = document.getElementById("speedTypingTest");
let quoteDisplayElement = document.getElementById("quoteDisplay");
let quoteInputElement = document.getElementById("quoteInput");
let timerElement = document.getElementById("timer");
let submitBtnEl = document.getElementById('submitBtn');
let resetBtnEl = document.getElementById('resetBtn');

let intervalId;

function timerStart() {
    let secondsCount = 0;
    intervalId = setInterval(function() {
        secondsCount += 1;
        timerElement.textContent = `${secondsCount} seconds`;
    }, 1000);
}

function displayResult(content) {
    quoteDisplayElement.textContent = content;
}

function randomQuotation() {

    let options = {
        method: "GET"
    };
    spinnerEl.classList.remove("d-none"); // Show spinner
    speedTypingTestEl.classList.add("d-none");

    fetch(RANDOM_QUOTE_API_URL, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            displayResult(jsonData.content);
            spinnerEl.classList.add("d-none"); // Hide spinner
            speedTypingTestEl.classList.remove("d-none");
        });
}


resetBtnEl.onclick = function() {
    randomQuotation();
    clearInterval(intervalId);
    timerStart();
    timerElement.textContent = "0 seconds";
    quoteInputElement.value = "";
}

submitBtnEl.onclick = function() {
    let enteredText = quoteInputElement.value;
    if (enteredText === quoteDisplayElement.textContent) {
        clearInterval(intervalId);
    } else {

    }
};

timerStart();
randomQuotation();
