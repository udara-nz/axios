import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const UserData = ({item}) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.card}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.email}>{item.email}</Text>
        <Text style={styles.username}>{item.username}</Text>
        <Text style={styles.phone}>{item.phone}</Text>
        <Text style={styles.website}>{item.website}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 30,
    paddingHorizontal: 10,
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '500',
  },
  cardContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    height: 'auto',
    width: 270,
    backgroundColor: '#03363e',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
  },
  email: {
    color: '#fff',
  },
  username: {
    color: '#fff',
  },
  phone: {
    color: '#fff',
  },
  website: {
    color: '#fff',
  },
});

export default UserData;
