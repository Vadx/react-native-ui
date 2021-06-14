import React from 'react'
import { Text, StyleSheet, View, FlatList } from 'react-native'

const HomeScreen = () => {
  const listItems= (
    { name: 'Item #0' },
    { name: 'Item #1' },
    { name: 'Item #2' },
    { name: 'Item #3' },
    { name: 'Item #4' }
  )

  return (
    <View>
      <Text style={styles.textStyle}>Home Screen</Text>
      <FlatList style={styles.list} />
    </View>
  )
}


const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    textAlign: 'center',
    paddingTop: 70,
    marginBottom: 20
  },
  list: {
    padding: 5,
    margin: 5,
    borderWidth: 1
  }
});

export default HomeScreen