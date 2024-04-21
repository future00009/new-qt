const startTimerBtn = document.getElementById('startTimer');
const stopTimerBtn = document.getElementById('stopTimer');
const stopwatchDisplay = document.getElementById('stopwatchDisplay');
const activityList = document.getElementById('activityList');

let startTime = 0;
let elapsedTime = 0;
let timerInterval;

startTimerBtn.addEventListener('click', startTimer);
stopTimerBtn.addEventListener('click', stopTimer);

function startTimer() {
    // Reset elapsedTime to 0 and start a new timer
    elapsedTime = 0;
    startTime = Date.now();
    clearInterval(timerInterval); // Clear any existing interval
    timerInterval = setInterval(updateStopwatch, 100);
}

function stopTimer() {
    clearInterval(timerInterval);
    const endTime = Date.now();
    elapsedTime = endTime - startTime;
    const activity = `Activity: IN, Duration: ${formatDuration(elapsedTime)}`;
    addToActivityList(activity);
    updateStopwatch(); // Update display immediately
}

function updateStopwatch() {
    const elapsed = Date.now() - startTime;
    stopwatchDisplay.textContent = formatDuration(elapsed);
}

function addToActivityList(activity) {
    const listItem = document.createElement('li');
    listItem.textContent = activity;
    activityList.appendChild(listItem);
}

function formatDuration(duration) {
    const hours = Math.floor(duration / (1000 * 60 * 60));
    const minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((duration % (1000 * 60)) / 1000);
    return (
        String(hours).padStart(2, '0') +
        ':' +
        String(minutes).padStart(2, '0') +
        ':' +
        String(seconds).padStart(2, '0')
    );
}
