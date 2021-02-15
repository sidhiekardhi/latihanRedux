import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Biodata from './src/Biodata/Biodata';
import { Provider } from 'react-redux'
import store from './src/redux/store';

export default function App() {
  return (
    <Provider store={store}>
    <Biodata/>
      <StatusBar style="auto" />
    </Provider>
  );
}

