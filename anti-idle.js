const { mouse, left, right, up, down } = require('@nut-tree/nut-js');

var timeBetweenChecksInSeconds = 1;
var lastCheckedMousePosition = { x: 0, y: 0 };
var isComputerIdle = false;
var timeForSetIdleStatusInMinutes = 0.5;
var mouseIdleTimeInSeconds = 0;
var statusText = 'Started';

function start() {
  setStatusText('Started');

  setInterval(async () => {
    var mousePosition = await mouse.getPosition();

    if (isMousePositionEqual(lastCheckedMousePosition, mousePosition)) {
      if (isComputerIdle) {
        moveMouseInCircles();
      } else {
        if (
          secondsToMinutes(mouseIdleTimeInSeconds) >=
          timeForSetIdleStatusInMinutes
        ) {
          setIdleStatus();
          setStatusText('Computer is idle');
        } else {
          mouseIdleTimeInSeconds += timeBetweenChecksInSeconds;
          setStatusText(
            `Mouse is idle for ${mouseIdleTimeInSeconds} ${
              mouseIdleTimeInSeconds == 1 ? 'second' : 'seconds'
            }`
          );
        }
      }
    } else {
      lastCheckedMousePosition = mousePosition;
      setNonIdleStatus();
      setStatusText('Mouse is moving');
    }
  }, secondsToMilliseconds(timeBetweenChecksInSeconds));
}

function setIdleStatus() {
  isComputerIdle = true;
}

function setNonIdleStatus() {
  isComputerIdle = false;
  mouseIdleTimeInSeconds = 0;
}

async function moveMouseInCircles() {
  await mouse.move(left(10));
  await mouse.move(up(10));
  await mouse.move(right(10));
  await mouse.move(down(10));
}

function isMousePositionEqual(oldPosition, newPosition) {
  return oldPosition.x === newPosition.x && oldPosition.y === newPosition.y;
}

function secondsToMinutes(seconds) {
  return seconds / 60;
}

function secondsToMilliseconds(seconds) {
  return seconds * 1000;
}

function setStatusText(text) {
  console.log(text);
  statusText = text;
}

function getStatusText() {
  return statusText;
}

module.exports = { start, getStatusText };
