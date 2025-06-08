import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import RegisterScreen from '../screens/RegisterScreen';
import SensorListScreen from '../screens/SensorScreen';
import FarmCreateScreen from '../screens/FarmCreateScreen';
import FarmListScreen from '../screens/FarmListScreen';
import FarmDetailScreen from '../screens/FarmDetailsScreen';
import { Farm } from '../services/farmService';
import DeviceCreateScreen from '../screens/DeviceCreateScreen';

export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  Welcome: { name: string };
  Register: undefined;
  SensorList: { farmId: number };
  FarmList: undefined;
  FarmCreate: undefined;
  FarmDetail: { farm: Farm };
  DeviceCreate: { farmId: number };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Routes() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
      <Stack.Screen name="SensorList" component={SensorListScreen} options={{ title: 'Sensores' }} />
      <Stack.Screen name="FarmList" component={FarmListScreen} options={{ title: 'Fazendas' }} />
      <Stack.Screen name="FarmCreate" component={FarmCreateScreen} options={{ title: 'Nova Fazenda' }} />
      <Stack.Screen name="FarmDetail" component={FarmDetailScreen} options={{ title: 'Detalhes da Fazenda' }} />
      <Stack.Screen name="DeviceCreate" component={DeviceCreateScreen} options={{ title: 'Cadastrar Dispositivo' }}/>
    </Stack.Navigator>
  );
}
