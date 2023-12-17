import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    header: {
        height: 90,
        backgroundColor: 'lightblue',
    },
    text: {
        marginTop: 60,
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
    }
})

export default Header