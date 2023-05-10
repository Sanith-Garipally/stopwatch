import {Component} from 'react'
import './index.css'

class StopWatch extends Component {
  state = {
    date: new Date(),
  }

  componentDidMount() {
    const {date} = this.state
    date.setMinutes(0)
    date.setSeconds(0)
    this.setState({date})
  }

  startTimer = () => {
    this.timerId = setInterval(this.tick, 1000)
  }

  tick = () => {
    const {date} = this.state
    date.setSeconds(date.getSeconds() + 1)
    this.setState({date})
  }

  stopTimer = () => {
    clearInterval(this.timerId)
  }

  resetTimer = () => {
    const {date} = this.state
    date.setMinutes(0)
    date.setSeconds(0)
    this.setState({date})
  }

  render() {
    const {date} = this.state
    let minutes
    let seconds
    if (date.getMinutes() < 10) {
      minutes = `0${date.getMinutes()}`
    } else {
      minutes = date.getMinutes()
    }
    if (date.getSeconds() < 10) {
      seconds = `0${date.getSeconds()}`
    } else {
      seconds = date.getSeconds()
    }
    return (
      <div className="bg-container">
        <div className="content-container">
          <h1 className="head-1">Stopwatch</h1>
          <div className="sw-container">
            <div className="timer-container">
              <img
                className="stopwatch"
                alt="stopwatch"
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png "
              />
              <p className="timer-para">Timer</p>
            </div>
            <h1 className="timer-ms">
              {minutes}:{seconds}
            </h1>
            <div className="buttons-container">
              <button
                className="btn btn-1"
                type="button"
                onClick={this.startTimer}
              >
                Start
              </button>
              <button
                className="btn btn-2"
                type="button"
                onClick={this.stopTimer}
              >
                Stop
              </button>
              <button
                className="btn btn-3"
                type="button"
                onClick={this.resetTimer}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default StopWatch
