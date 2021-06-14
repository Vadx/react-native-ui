import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

const SettingsScreen = () => {
 return (
   <View>
     <Text style={styles.textStyle}>Styled text</Text> 
   </View>
 )
}


const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30
  },
});

export default SettingsScreen