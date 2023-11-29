import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

// components import
import { Welcome } from './Welcome';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    }
  }

  onPressMinusOne = () => {
    this.setState({ count: this.state.count - 1 });
  };

  onPressPlusOne = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <View style={styles.container}>
        <Button title="-1" onPress={this.onPressMinusOne} />{/* (1) */}
        <Text>{this.state.count}</Text>
        <Button title="+1" onPress={this.onPressPlusOne} />
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