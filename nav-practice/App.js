import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// navigation import
import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// components import
import HomeScreen from './src/screens/HomeScreen';
import UserScreen from './src/screens/UserScreen';

// expo/vactor-icons import
import { Ionicons } from '@expo/vector-icons';

// const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName='ホーム画面' screenOptions={() => ({tabBarActiveTintColor: 'tomato', tabBarInactiveTintColor: 'gray',})}>
        <Tab.Screen name="ホーム画面" component={ HomeScreen } options={{tabBarIcon: ({ color, size }) => (<Ionicons name='ios-home' size={size} color={color} />)}} />
        <Tab.Screen name="ユーザー画面" component={ UserScreen } options={{ title: 'ユーザー'}} options={{tabBarIcon: ({ color, size }) => (<Ionicons name='person' size={size} color={color} />)}}/>
      </Tab.Navigator>
    </NavigationContainer>
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
