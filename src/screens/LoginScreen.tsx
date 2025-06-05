import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import AppBar from '../components/AppBar';
import { theme } from '../styles/Theme';
import { mockUsers } from '../data/mockUsers';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/Routes';

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

export default function LoginScreen({ navigation }: Props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleLogin() {
    const user = mockUsers.find(
      (u) => u.email === email.trim().toLowerCase() && u.password === password
    );

    if (user) {
      navigation.navigate('Welcome', { name: user.name });
    } else {
      Alert.alert('Erro', 'Email ou senha inválidos');
    }
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
        <Text style={styles.title}>Login</Text>

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

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.registerText}>
          Não tem login? <Text style={styles.registerLink}>Cadastre-se aqui</Text>
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
    fontSize: theme.fonts.title,
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
  registerText: {
  marginTop: theme.spacing.md,
  color: theme.colors.textLight,
  fontSize: 14,
  textAlign: 'center',
},
registerLink: {
  color: theme.colors.secondary, 
  fontWeight: 'bold',
},

});
