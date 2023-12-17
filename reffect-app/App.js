import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {  Text, View, SafeAreaView } from 'react-native';
import tx from 'twrnc';
import Header from './components/Header';

export default function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getUser = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      const users = await res.json();
      setUsers(users);
      // console.log(users);
    };
    getUser();
  }, []);


  return (
    <View>
      <Header title="ユーザー一覧" />
      {users.map((user) => (
        <Text key={user.id}>{user.name}</Text>
      ))}
    </View>
  );
}

