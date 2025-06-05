import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import AppBar from '../components/AppBar';
import { theme } from '../styles/Theme';


type RootStackParamList = {
  FarmDetail: { farm: any };
  SensorList: { farmId: string };
  DeviceCreate: { farmId: string };

};

type FarmDetailScreenRouteProp = RouteProp<RootStackParamList, 'FarmDetail'>;

export default function FarmDetailScreen() {
  const navigation = useNavigation<any>();
  const route = useRoute<FarmDetailScreenRouteProp>();


  if (!route.params || !route.params.farm) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ color: 'red', fontSize: 16 }}>Erro: Dados da fazenda não encontrados.</Text>
      </View>
    );
  }

  const { farm } = route.params;
  const address = farm.address ?? {};

  return (
    <LinearGradient colors={['#0C2D48', '#F05A28']} style={styles.container}>
      <AppBar />
      <View style={styles.content}>
        <Text style={styles.title}>{farm.name}</Text>
        <Text style={styles.label}>Tamanho: {farm.land}</Text>
        <Text style={styles.label}>Endereço:</Text>
        <Text style={styles.address}>
          {address.street}, {address.number || 'S/N'}, {address.neighborhood}
        </Text>
        <Text style={styles.address}>
          {address.city} - {address.state} | CEP: {address.zipcode}
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('SensorList', { farmId: farm.id })}
        >
          <Text style={styles.buttonText}>Ver Dispositivos</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#F29441' }]}
          onPress={() => navigation.navigate('DeviceCreate', { farmId: farm.id })}
        >
          <Text style={styles.buttonText}>Cadastrar Novo Dispositivo</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: {
    flex: 1,
    padding: theme.spacing.lg,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: theme.colors.textLight,
    marginBottom: theme.spacing.md,
    textAlign: 'center',
  },
  label: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 4,
  },
  address: {
    color: '#ddd',
    fontSize: 14,
    marginBottom: 2,
  },
  button: {
    marginTop: theme.spacing.md,
    backgroundColor: theme.colors.accent,
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
