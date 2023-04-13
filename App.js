import React from 'react';
import { View } from 'react-native';
import Register from './components/screen/Register';
import UserList from './components/screen/UserListPage';

const App = () => {
  return (
    <View>
      <UserList />
      <Register />
    </View>
  );
};

export default App;
