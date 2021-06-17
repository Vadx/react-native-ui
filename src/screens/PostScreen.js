import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

const PostScreen = () => {
 return (
   <View style={styles.wrap}>
     <Text style={styles.textStyle}>Post</Text> 
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
    fontSize: 30
  },
});

export default PostScreen