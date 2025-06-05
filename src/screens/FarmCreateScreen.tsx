import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert, TouchableOpacity, ScrollView, Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import AppBar from '../components/AppBar';
import { theme } from '../styles/Theme';
import DropDownPicker from 'react-native-dropdown-picker';

export default function FarmCreateScreen() {
  const [name, setName] = useState('');
  const [street, setStreet] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('SP');
  const [number, setNumber] = useState('');
  const [complement, setComplement] = useState('');

  // DropDownPicker
  const [open, setOpen] = useState(false);
  const [land, setLand] = useState('SMALL');
  const [landOptions, setLandOptions] = useState([
    { label: 'Pequena', value: 'SMALL' },
    { label: 'Média', value: 'MEDIUM' },
    { label: 'Grande', value: 'LARGE' },
    { label: 'Muito Grande', value: 'EXTRA_LARGE' },
  ]);

  function handleSubmit() {
    if (!name || !land || !street || !neighborhood || !zipcode || !city || !state) {
      Alert.alert('Erro', 'Preencha todos os campos obrigatórios');
      return;
    }

    Alert.alert('Fazenda cadastrada com sucesso!');
    setName('');
    setLand('SMALL');
    setStreet('');
    setNeighborhood('');
    setZipcode('');
    setCity('');
    setState('SP');
    setNumber('');
    setComplement('');
  }

  return (
    <LinearGradient colors={['#0C2D48', '#F05A28']} style={styles.container}>
      <AppBar />
      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.title}>Nova Fazenda</Text>

        <TextInput
          style={styles.input}
          placeholder="Nome da fazenda"
          value={name}
          onChangeText={setName}
          placeholderTextColor="#ccc"
        />

        <Text style={styles.label}>Tamanho da Propriedade</Text>
        <DropDownPicker
          open={open}
          value={land}
          items={landOptions}
          setOpen={setOpen}
          setValue={setLand}
          setItems={setLandOptions}
          placeholder="Selecione o tamanho"
          style={styles.dropdown}
          textStyle={styles.dropdownText}
          dropDownContainerStyle={styles.dropdownBox}
          listMode="MODAL"
          modalProps={{ animationType: 'fade' }}
          theme="DARK"
        />

        <TextInput style={styles.input} placeholder="Rua" value={street} onChangeText={setStreet} placeholderTextColor="#ccc" />
        <TextInput style={styles.input} placeholder="Bairro" value={neighborhood} onChangeText={setNeighborhood} placeholderTextColor="#ccc" />
        <TextInput style={styles.input} placeholder="CEP" value={zipcode} onChangeText={setZipcode} placeholderTextColor="#ccc" keyboardType="numeric" />
        <TextInput style={styles.input} placeholder="Cidade" value={city} onChangeText={setCity} placeholderTextColor="#ccc" />
        <TextInput style={styles.input} placeholder="Estado (ex: SP)" value={state} onChangeText={setState} placeholderTextColor="#ccc" maxLength={2} />
        <TextInput style={styles.input} placeholder="Número (opcional)" value={number} onChangeText={setNumber} placeholderTextColor="#ccc" keyboardType="numeric" />
        <TextInput style={styles.input} placeholder="Complemento (opcional)" value={complement} onChangeText={setComplement} placeholderTextColor="#ccc" />

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Cadastrar Fazenda</Text>
        </TouchableOpacity>

        <Text style={styles.infoText}>Endereço não poderá ser alterado após o cadastro</Text>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  scroll: {
    padding: theme.spacing.lg,
    paddingBottom: 32,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    color: theme.colors.textLight,
    fontWeight: 'bold',
    marginBottom: theme.spacing.md,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#ffffff20',
    borderRadius: 6,
    paddingVertical: 6,
    paddingHorizontal: 10,
    marginBottom: 8,
    color: theme.colors.textLight,
    fontSize: 14,
    height: 40,
    width: '100%',
    maxWidth: 400,
    alignSelf: 'center',
  },
  label: {
    color: '#ccc',
    marginBottom: 4,
    fontSize: 14,
    marginTop: 6,
    alignSelf: 'center',
    maxWidth: 400,
    width: '100%',
  },
  dropdown: {
    backgroundColor: '#ffffff20',
    borderColor: '#ccc',
    borderRadius: 6,
    width: '100%',
    maxWidth: 400,
    alignSelf: 'center',
    marginBottom: 8,
    zIndex: 10,
  },
  dropdownBox: {
    backgroundColor: '#1c1c1c',
    borderColor: '#ccc',
    zIndex: 9,
  },
  dropdownText: {
    fontSize: 14,
    color: '#fff',
  },
  button: {
    backgroundColor: theme.colors.accent,
    padding: theme.spacing.md,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: theme.spacing.md,
    width: '100%',
    maxWidth: 400,
  },
  buttonText: {
    color: theme.colors.textLight,
    fontWeight: '600',
    fontSize: theme.fonts.button,
  },
  infoText: {
    marginTop: 10,
    fontSize: 12,
    color: '#ddd',
    textAlign: 'center',
    fontStyle: 'italic',
    maxWidth: 400,
    alignSelf: 'center',
  },
});
