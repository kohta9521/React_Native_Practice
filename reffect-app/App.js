import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {  Text, View,Alert,  SafeAreaView, FlatList, StyleSheet, TouchableOpacity, Pressable, Image } from 'react-native';
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
    <Pressable
      onPress={() => {
        Alert.alert('タップされました');
      }}
    >
      <View style={styles.item}>
        <Image
          style={styles.avatar}
          source={{ uri: 'https://i.pravatar.cc/150' }}
        />
        <Text>{item.name}</Text>
      </View>

    </Pressable>
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
    flexDirection: 'row',
    alignItems: 'center',
    padding: 40,
    backgroundColor: '#88cb7f',
  },
  avatar: {
    height: 50,
    width: 50,
    borderRadius: 30,
    marginRight: 8,
  },
});
