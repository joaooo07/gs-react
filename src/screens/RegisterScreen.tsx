import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import AppBar from '../components/AppBar';
import { theme } from '../styles/Theme';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/Routes';

type Props = NativeStackScreenProps<RootStackParamList, 'Register'>;

export default function RegisterScreen({ navigation }: Props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');

  function handleRegister() {
    if (!name || !email || !password || !confirm) {
      Alert.alert('Atenção', 'Preencha todos os campos');
      return;
    }

    if (password !== confirm) {
      Alert.alert('Erro', 'As senhas não coincidem');
      return;
    }

    // Aqui futuramente adicionaremos o novo usuário ao mock ou API
    Alert.alert('Sucesso', 'Cadastro realizado!');
    navigation.replace('Login');
  }

  return (
    <LinearGradient
      colors={['#0C2D48', '#F05A28']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <AppBar />

      <View style={styles.content}>
        <Text style={styles.title}>Cadastro </Text>

        <TextInput
          style={styles.input}
          placeholder="Nome"
          placeholderTextColor="#ccc"
          value={name}
          onChangeText={setName}
        />

        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#ccc"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#ccc"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <TextInput
          style={styles.input}
          placeholder="Confirmar Senha"
          placeholderTextColor="#ccc"
          secureTextEntry
          value={confirm}
          onChangeText={setConfirm}
        />

        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.replace('Login')}>
          <Text style={styles.backToLogin}>
            Já tem uma conta? <Text style={styles.link}>Voltar para o login</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing.lg,
  },
  title: {
    fontSize: 24,
    color: theme.colors.textLight,
    fontWeight: 'bold',
    marginBottom: theme.spacing.lg,
  },
  input: {
    backgroundColor: '#ffffff20',
    borderRadius: 8,
    padding: 12,
    width: '80%',
    marginBottom: theme.spacing.md,
    color: theme.colors.textLight,
  },
  button: {
    backgroundColor: theme.colors.accent,
    paddingVertical: theme.spacing.md,
    paddingHorizontal: theme.spacing.lg,
    borderRadius: 8,
    marginTop: theme.spacing.sm,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: theme.colors.textLight,
    fontSize: theme.fonts.button,
    fontWeight: '600',
  },
  backToLogin: {
    marginTop: theme.spacing.md,
    color: theme.colors.textLight,
    fontSize: 14,
    textAlign: 'center',
  },
  link: {
    color: theme.colors.secondary,
    fontWeight: 'bold',
  },
});
