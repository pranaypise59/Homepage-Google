displayTime();
// Set Time Interval (every one minute)
setInterval(displayTime, 60000);

// Display Time Function
function displayTime() {
    // Initializing the variables
    let currentTime = new Date();
    let hour = currentTime.getHours();
    let min = currentTime.getMinutes();
    let amPM = "AM";

    // Initializing the HTML variables
    let hourHTML = document.getElementById('hour');
    let minHTML = document.getElementById('min');
    let amPMHTML = document.getElementById('ampm');

    // Some Logic
    if (hour > 12) {
        hour -= 12;
        amPM = "PM";
    }

    function makeSingleToDoubleDigit(num) {
        if (num.toString().length == 1) {
            num = "0" + num;
        }
        return num;
    }

    // Making Single to Double Digits
    min = makeSingleToDoubleDigit(min);
    hour = makeSingleToDoubleDigit(hour);

    // Displaying Time in HTML
    hourHTML.innerHTML = hour;
    minHTML.innerHTML = min;
    amPMHTML.innerHTML = amPM;
}
