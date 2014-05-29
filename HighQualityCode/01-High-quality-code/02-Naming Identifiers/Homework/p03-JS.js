//Refactor the following examples to produce code with well-named identifiers in JavaScript
function onButtonClick(event, args) {
    'use strict';
    var currentWindow = window;
    var currentBrowser = currentWindow.navigator.appCodeName;
    var browserIsMozilla = currentBrowser === "Mozilla";

    if (browserIsMozilla) {
        alert("Yes");
    }
    else {
        alert("No");
    }
}