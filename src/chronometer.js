class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    // ... your code goes here
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (printTimeCallback) printTimeCallback();
    }, 1000);
  }

  getMinutes() {
    // ... your code goes here
    let minutes = Math.floor(this.currentTime / 60) 
    return minutes
  }

  getSeconds() {
    // ... your code goes here
    let seconds = Math.floor(this.currentTime % 60) 
    return seconds
  }

  computeTwoDigitNumber(value) {
    if (value < 10) {
      let minutos = (("0" + value).slice(-2)).toString()
      return minutos
    } else {
      let segundos = value.toString()
      return segundos
    }
  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime = 0
  }

  split() {
    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}`
  }
}