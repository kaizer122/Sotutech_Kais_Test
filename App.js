import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { Header } from './src/components/common';
import UserList from './src/components/UserList';
import store from './src/store'
import Router from './src/Router'
const App = () => {
  return (
    <Provider store={store}>
      <Router/>
    </Provider>
  );
};

export default App;
