import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert, TouchableOpacity, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import AppBar from '../components/AppBar';
import { theme } from '../styles/Theme';

export default function DeviceCreateScreen() {
  const [sensorType, setSensorType] = useState('');
  const [description, setDescription] = useState('');
  const [zoneName, setZoneName] = useState('');
  const [deviceType, setDeviceType] = useState('');
  const [deviceStatus, setDeviceStatus] = useState('Ativo');

  function handleSubmit() {
    if (!sensorType || !description || !zoneName || !deviceType) {
      Alert.alert('Erro', 'Preencha todos os campos obrigatórios');
      return;
    }

    // Enviar dados para API (em breve)
    Alert.alert('Dispositivo cadastrado com sucesso!');
    
    // Resetar campos
    setSensorType('');
    setDescription('');
    setZoneName('');
    setDeviceType('');
    setDeviceStatus('Ativo');
  }

  return (
    <LinearGradient
      colors={['#0C2D48', '#F05A28']}
      style={styles.container}
    >
      <AppBar />
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Novo Dispositivo</Text>

        <TextInput
          style={styles.input}
          placeholder="Tipo de Sensor (ex: Temperatura)"
          placeholderTextColor="#ccc"
          value={sensorType}
          onChangeText={setSensorType}
        />
        <TextInput
          style={styles.input}
          placeholder="Descrição"
          placeholderTextColor="#ccc"
          value={description}
          onChangeText={setDescription}
        />
        <TextInput
          style={styles.input}
          placeholder="Nome da Zona"
          placeholderTextColor="#ccc"
          value={zoneName}
          onChangeText={setZoneName}
        />
        <TextInput
          style={styles.input}
          placeholder="Tipo de Dispositivo (ex: ESP32)"
          placeholderTextColor="#ccc"
          value={deviceType}
          onChangeText={setDeviceType}
        />
        <TextInput
          style={styles.input}
          placeholder="Status (Ativo/Inativo)"
          placeholderTextColor="#ccc"
          value={deviceStatus}
          onChangeText={setDeviceStatus}
        />

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Cadastrar Dispositivo</Text>
        </TouchableOpacity>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: {
    padding: theme.spacing.lg,
  },
  title: {
    fontSize: 22,
    color: theme.colors.textLight,
    fontWeight: 'bold',
    marginBottom: theme.spacing.md,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#ffffff20',
    borderRadius: 6,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginBottom: 10,
    color: theme.colors.textLight,
    fontSize: 14,
    height: 42,
  },
  button: {
    backgroundColor: theme.colors.accent,
    padding: theme.spacing.md,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: theme.spacing.md,
  },
  buttonText: {
    color: theme.colors.textLight,
    fontWeight: '600',
    fontSize: 16,
  },
});
