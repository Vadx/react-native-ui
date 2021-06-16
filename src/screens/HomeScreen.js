import React from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'

const HomeScreen = ({ navigation }) => {

  return (
    <View>
      <Text style={styles.textStyle}>Home Screen</Text>
      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate('Settings')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textStyle: {
    fontSize: 30,
    textAlign: 'center',
    paddingTop: 70,
    marginBottom: 20
  }
});

export default HomeScreen