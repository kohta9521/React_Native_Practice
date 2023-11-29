import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// components import
import { Welcome } from './Welcome';

export default function App() {
  return (
    <View style={styles.container}>
      <Welcome name="Kohta" />
      <Welcome name="Satou" />
      <Welcome name="Tanaka" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
