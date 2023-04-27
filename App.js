import React from 'react';
import { View } from 'react-native';
import Register from './compoments/screen/Register';
import UserList from './compoments/screen/UserListPage';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return (
    <View>
      <UserList />
      <Register />
    </View>
  );
};

export default App;
