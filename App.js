import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Routes } from './src/routes';
import { Home } from './src/screens/Home';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style='inverted' />
      <Routes/>
    </NavigationContainer>

  );
}


