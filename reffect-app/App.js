import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {  Text, View, SafeAreaView, FlatList, StyleSheet } from 'react-native';
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

  const renderitem = ({ item }) => (
    <View style={styles.item}>
      <Text>{item.name}</Text>
    </View>
  )


  return (
    <View style={styles.container}>
      <Header title="ユーザー一覧" />
      <FlatList
        data={users}
        renderItem={renderitem}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => (
          <View
            style={{
              backgroundColor: 'lightgray',
              height: 1,
            }}
          >
          </View>
        )}
      />
      {/* {users.map((user) => (
        <Text key={user.id}>{user.name}</Text>
      ))} */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    padding: 40,
  },
});
