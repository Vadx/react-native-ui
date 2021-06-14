import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

const HomeScreen = () => {

  return (
    <View>
      <Text style={styles.textStyle}>Home Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    textAlign: 'center',
    paddingTop: 70,
    marginBottom: 20
  }
});

export default HomeScreen