import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, TextInput } from 'react-native';

// components import
import Cafe from './src/components/Cafe';
import PizzaTranlator from './src/components/PizzaTranslator';
import Logo from './src/components/Logo';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>hello</Text>
      {/* <Cafe />
      <Cat /> */}
      {/* <Cafe /> */}
      {/* <PizzaTranlator /> */}
      <Logo />
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
