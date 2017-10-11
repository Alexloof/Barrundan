import React, { Component } from 'react'
import { View, StyleSheet, Text, Dimensions } from 'react-native'

class Timer extends Component {
  state = {
    time: 59
  }
  componentDidMount() {
    this.ticker = setInterval(() => {
      if (this.state.time === 0) {
        this.setState({ time: 59 })
      } else {
        this.setState({ time: this.state.time - 1 })
      }
    }, 1000)
  }
  componentWillUnmount() {
    clearInterval(this.ticker)
  }

  render() {
    const { time, timeText, timerWrapper, timer } = styles

    return (
      <View style={timerWrapper}>
        <View style={timer}>
          <Text style={time}>20</Text>
          <Text style={timeText}>Timmar</Text>
        </View>
        <View style={timer}>
          <Text style={time}>40</Text>
          <Text style={timeText}>Minuter</Text>
        </View>
        <View style={timer}>
          <Text style={time}>{this.state.time}</Text>
          <Text style={timeText}>Sekunder</Text>
        </View>
      </View>
    )
  }
}
const { height, width } = Dimensions.get('window')

const styles = StyleSheet.create({
  timerWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20
  },
  timer: {
    width: width / 3
  },
  time: {
    color: '#FFFFFF',
    fontSize: 60,
    alignSelf: 'center'
  },
  timeText: {
    color: '#FFFFFF',
    fontSize: 12,
    alignSelf: 'center'
  }
})

export default Timer