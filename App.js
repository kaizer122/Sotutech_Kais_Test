import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { Header } from './src/components/common';
import UserList from './src/components/UserList';
import store from './src/store'

const App = () => {
  return (
    <Provider store={store}>
      <View style={{ flex: 1 }}>
        <Header title="Users List" />
        <UserList />
      </View>
    </Provider>
  );
};

export default App;
