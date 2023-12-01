import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, Alert, TouchableOpacity } from 'react-native';

export default function App() {
  function hello() {
    Alert.alert(
      "挨拶",
      'このまま処理を続行しますか？',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          styles: 'cancel'
        },
        {
          text: 'OK',
          onPress: () => console.log('OK Pressed'),
        }
      ]
    );
  };

  return (
    <View style={styles.container}>
      {/* <Text>Hello World!</Text> */}
      {/* <Text style={[styles.text, styles.textRed]}>kohta first app!</Text>
      <View style={styles.viewStyle}>
        <Text>test</Text>
      </View> */}
      {/* <Image resizeMode='contain' style={styles.profileImage} source={require('./assets/profile_icon.png')} /> */}
      {/* <Button title='greeting' onPress={hello}>!</Button> */}
      <View style={styles.baseView}>
        <Image resizeMethod='contain' style={styles.profileImage} source={require('./assets/profile_icon.png')} />
          <View style={styles.textColumnView}>
            <Text style={styles.nameText}>Tanaka Tarou</Text>
            <Text style={styles.detailText}>Hobby: running</Text>
          </View>

          <TouchableOpacity style={styles.button} onPress={hello}>
            <Text style={styles.buttonText}>greet!</Text>
          </TouchableOpacity>
        {/* <Button title='greet!' onPress={hello}></Button> */}
      </View>
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
  baseView: {
    flexDirection: 'row',
    borderWidth: 2,
    width: '90%',
    height: 120,
    padding: 10,
  },
  nameText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,
  },
  detailText: {
    fontSize: 16,
    color: 'gray',
    paddingLeft: 14,
  },
  textColumnView: {
    flex: 2,
  },
  profileImage: {
    flex: 1,
    width: 100,
    height: 100,
  },
  button: {
    flex: 1,
    alignSelf: 'center',
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
    height: 36,
    borderRadius: 18,
    width: 80,

  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  }
});
