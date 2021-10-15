// Sets a 1 second interval. Calls printTime function once each second.
var intervalSec = setInterval(printTime, 1000);

// Used as callback in intervalSec.
function printTime() {
    // Prints out the time when executed. 
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}