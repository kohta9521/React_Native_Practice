import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

function HomeScreen() {
  const navigation = useNavigation(); // (2)

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Text>Home Screen</Text>
      <Button
        title="詳細へ"
        onPress={() => navigation.navigate('Detail')} />{/* (3) */}
    </View>
  );
}

function DetailScreen() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Text>Detail Screen</Text>
    </View>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">{/* (1) */}
        <Stack.Screen
          name="Home"
          component={HomeScreen} />
          options={{ title: 'ホーム' }}{/* (4) */}
        <Stack.Screen
          name="Detail"
          component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}