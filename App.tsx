import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/navigation/Routes';

export default function App() {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}
