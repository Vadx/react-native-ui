import React from 'react'
import { Text, StyleSheet, View, FlatList, Image } from 'react-native'

const list = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba1',
    rang: 'CEO',
    avatar_url: 'https://i.pravatar.cc/150?img=1',
    title: 'Vice President'
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba2',
    rang: 'Manager',
    avatar_url: 'https://i.pravatar.cc/150?img=2',
    title: 'Vice Chairman'
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba3',
    rang: 'IT Support',
    avatar_url: 'https://i.pravatar.cc/150?img=3',
    title: 'Vice President'
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba4',
    rang: 'Softwer Engeneer',
    avatar_url: 'https://i.pravatar.cc/150?img=4',
    title: 'Vice President'
  },
]

const MyNetworkScreen = () => {

  const renderItem = ({ item }) => (
    <View style={styles.listItem}>
      <Image
        style={styles.tinyLogo}
        source={{ uri: item.avatar_url }}
      />
      <Text style={styles.title}>{item.title}</Text>
      <Text> / </Text>
      <Text>{item.rang}</Text>
    </View>
  );

  return (
    <View>
      <Text style={styles.textStyle}>All Users</Text>
      <FlatList
        data={list}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={styles.list}
      />
    </View>
  )
}


const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
    textAlign: 'center',
    paddingTop: 70,
    marginBottom: 20
  },
  list: {
    padding: 10,
    margin: 10,
    borderWidth: 1
  },
  listItem: {
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center'
  },
  title: {
    fontWeight: '700'
  },
  tinyLogo: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    marginRight: 10,
    borderColor: '#777'
  },
});

export default MyNetworkScreen