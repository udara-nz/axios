import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import UserData from '../components/UserData';

interface User {
  id: number;
}

const HomeScreen = () => {
  const [users, setUsers] = useState<User[]>([]);

  const fetchUserData = async () => {
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/users',
      );
      const data: User[] = response.data;
      setUsers([...data, ...users]);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.appTitle}>User Data API</Text>
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.button} onPress={fetchUserData}>
          <Text style={styles.buttonText}>Refresh</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={users}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => <UserData item={item} />}
      />
    </View>
  );

  //   useEffect(() => {
  //     axios
  //       .get('https://jsonplaceholder.typicode.com/users')
  //       .then(response => setUsers(response.data))
  //       .catch(err => console.log(err));
  //   }, []);

  //   const renderUserCard = ({item}) => {
  //     return (
  // <View style={styles.cardContainer}>
  //   <View style={styles.card}>
  //     <Text style={styles.title}>{item.name}</Text>
  //     <Text style={styles.email}>{item.email}</Text>
  //     <Text style={styles.username}>{item.username}</Text>
  //     <Text style={styles.phone}>{item.phone}</Text>
  //     <Text style={styles.website}>{item.website}</Text>
  //   </View>
  // </View>
  //     );
  //   };

  //   return (
  //     <View style={styles.container}>
  //       <FlatList
  //         data={users}
  //         keyExtractor={item => item.id.toString()}
  //         renderItem={renderUserCard}
  //       />
  //     </View>
  //   );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  appTitle: {
    fontSize: 22,
    fontWeight: '500',
  },
  btnContainer: {
    // flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  button: {
    backgroundColor: '#3498db',
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  // container: {
  //   flex: 1,
  //   backgroundColor: '#f0f0f0',
  //   padding: 30,
  //   paddingHorizontal: 10,
  // },
  // title: {
  //   color: '#fff',
  //   fontSize: 20,
  //   fontWeight: '500',
  // },
  // cardContainer: {
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  // card: {
  //   height: 'auto',
  //   width: 270,
  //   backgroundColor: '#03363e',
  //   padding: 15,
  //   marginBottom: 10,
  //   borderRadius: 8,
  // },
  // email: {
  //   color: '#fff',
  // },
  // username: {
  //   color: '#fff',
  // },
  // phone: {
  //   color: '#fff',
  // },
  // website: {
  //   color: '#fff',
  // },
});

export default HomeScreen;
