import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

// components import
import { Welcome } from './Welcome';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date() // (2)
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => { // (4)
      this.tick();
    }, 1000); // 1秒おきに更新
  }

  componentWillUnmount() {
    clearInterval(this.timerID); // (5)
  }

  tick() { // (3)
    this.setState({ date: new Date() });
  }
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     count: 0,
  //   }
  // }

  // onPressMinusOne = () => {
  //   this.setState({ count: this.state.count - 1 });
  // };

  // onPressPlusOne = () => {
  //   this.setState({ count: this.state.count + 1 });
  // };

  render() {
    return (
      // <View style={styles.container}>
      //   <Button title="-1" onPress={this.onPressMinusOne} />{/* (1) */}
      //   <Text>{this.state.count}</Text>
      //   <Button title="+1" onPress={this.onPressPlusOne} />
      // </View>
      <View style={styles.container}>
      <Text>現在時刻</Text>
      <Text>{this.state.date.toLocaleTimeString()}</Text>{/* (1) */}
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});