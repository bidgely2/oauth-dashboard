import { RunContextApp } from "../RCApp"

export interface CountDownTimerTick {
  days    : number
  hours   : number
  minutes : number
  seconds : number
  durStr  : string
}

export class CountDownTimer {

  private timeRemaining : number = 0

  constructor(private rc : RunContextApp, 
              private onTickCb : (value : CountDownTimerTick, complete : boolean) => void) {
  }

  init(till : number) {

    this.timeRemaining = till - new Date().getTime()
    this.timeRemaining <= 0 ? this.complete() : this.start()
  }

  start() {

    this.onTick()

    const intervalId = setInterval(() => {
      // update the timer  
      this.timeRemaining -= 1000

      if (this.timeRemaining < 0) {
          // call the callback
          this.complete()
          // clear the interval if expired
          clearInterval(intervalId)
      } else {
        this.onTick()
    }

    }, 1000)
  }

  complete() {
    this.onTickCb(this.getTime(), true)
  }

  onTick() {
    this.onTickCb(this.getTime(), false)
  }

  getTime() {

    return this.rc.dateUtils.getDurationObject(this.timeRemaining)
  }

}