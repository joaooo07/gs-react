import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import AppBar from '../components/AppBar';
import { theme } from '../styles/Theme';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/Routes';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function HomeScreen({ navigation }: Props) {
  return (
    <LinearGradient
      colors={['#0C2D48', '#F05A28']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <AppBar />
      <View style={styles.content}>
        <Text style={styles.title}>Dashboard</Text>
        <Text style={styles.subtitle}>Monitoramento climático e de solo</Text>

        <TouchableOpacity style={styles.largeButton} onPress={() => navigation.navigate('FarmList')}>
        <Text style={styles.buttonText}>Ver Fazendas</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.largeButton, styles.secondaryButton]} onPress={() => navigation.navigate('FarmCreate')}>
        <Text style={[styles.buttonText, styles.secondaryButtonText]}>Cadastrar Fazenda</Text>
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
    fontSize: 26,
    color: theme.colors.textLight,
    fontWeight: 'bold',
    marginBottom: theme.spacing.sm,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: theme.colors.textLight,
    marginBottom: theme.spacing.lg,
    textAlign: 'center',
  },
  button: {
    backgroundColor: theme.colors.accent,
    paddingVertical: theme.spacing.md,
    paddingHorizontal: theme.spacing.lg,
    borderRadius: 8,
    marginVertical: theme.spacing.sm,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: theme.colors.textLight,
    fontSize: theme.fonts.button,
    fontWeight: '600',
  },
  largeButton: {
  backgroundColor: theme.colors.accent,
  paddingVertical: theme.spacing.lg,
  paddingHorizontal: theme.spacing.lg,
  borderRadius: 10,
  marginVertical: theme.spacing.md,
  width: '85%',
  alignItems: 'center',
},

  secondaryButton: {
    backgroundColor: theme.colors.secondary,
  },
  secondaryButtonText: {
    color: theme.colors.primary,
  },
});
