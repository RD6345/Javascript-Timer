function startTimer(duration, display) {
  var timer = duration, minutes, seconds;
  setInterval(function () {
    minutes = parseInt(timer / 60, 10)
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;

    if (--timer < 0) {
      timer = duration;
      alert("finished");
    }
  }, 1000);
}

    document.getElementById("button").onclick = function() {
    var oneMinutes = 60 * 1,
    display = document.querySelector('#clockDiv');
    startTimer(oneMinutes, display);
  }
