import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default function App() {
  function hello() {
    alert('Hello World!');
  };

  return (
    <View style={styles.container}>
      {/* <Text>Hello World!</Text> */}
      {/* <Text style={[styles.text, styles.textRed]}>kohta first app!</Text>
      <View style={styles.viewStyle}>
        <Text>test</Text>
      </View> */}
      {/* <Image resizeMode='contain' style={styles.profileImage} source={require('./assets/profile_icon.png')} /> */}
      <Button title='greeting' onPress={hello}>!</Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    backgroundColor: 'black',
    padding: 10,
  },
  textRed: {
    color: "red",
  },
  viewStyle: {
    width: 200,
    height: 100,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImage: {
    width: 100,
    height: 100,
  }
});
