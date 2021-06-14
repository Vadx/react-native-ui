import React from 'react'
import { Text, StyleSheet, View, FlatList } from 'react-native'

const list = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba1',
    name: 'Amy',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/127.jpg',
    title: 'Vice President'
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba2',
    name: 'Chris',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    title: 'Vice Chairman'
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba3',
    name: 'Ray',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    title: 'Vice President'
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba4',
    name: 'John',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/129.jpg',
    title: 'Vice President'
  },
]

const Item = ({ title }) => (
  <View style={styles.listItem}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const UsersScreen = () => {

  const renderItem = ({ item }) => (
    <Item title={item.title} />
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
    marginBottom: 5
  },
  title: {
    fontWeight: '700'
  }
});

export default UsersScreen