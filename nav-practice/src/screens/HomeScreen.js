import React  from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

const HomeScreen = ({ navigation }) => {
    // useFocusEffect(() => {
    //     console.log('Home Focus');
    //     return () => {
    //         console.log("Home UnFocus");
    //     }
    // }, []);
    return (
        <View style={styles.container}>
            <Text>ホーム画面</Text>
            <Button title='ユーザー' onPress={() => navigation.navigate('ユーザー画面', {userId: 1,})} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default HomeScreen;