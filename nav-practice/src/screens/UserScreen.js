import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

const UserScreen = () => {
    // useFocusEffect(() => {
    //     console.log('User Focus');
    //     return () => {
    //         console.log("User UnFocus");
    //     }
    // }, []);
    return (
        <View style={styles.container}>
            <Text>ユーザー画面</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default UserScreen;