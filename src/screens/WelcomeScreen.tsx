import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/Routes';
import { LinearGradient } from 'expo-linear-gradient';
import AppBar from '../components/AppBar';
import { theme } from '../styles/Theme';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

type Props = NativeStackScreenProps<RootStackParamList, 'Welcome'>;

export default function WelcomeScreen({ route, navigation }: Props) {
  const { name } = route.params;
  const progressRef = useRef<AnimatedCircularProgress>(null);

  useEffect(() => {
    progressRef.current?.animate(100, 5000); 

    const timeout = setTimeout(() => {
      navigation.replace('Home');
    }, 5000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <LinearGradient
      colors={['#0C2D48', '#F05A28']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <AppBar />
      <View style={styles.content}>
        <Text style={styles.title}>Bem-vindo, {name}</Text>
        <Text style={styles.subtitle}>Chegou a hora da colheita!</Text>

        <AnimatedCircularProgress
          ref={progressRef}
          size={120}
          width={10}
          fill={0}
          tintColor={theme.colors.textLight}
          backgroundColor="#ffffff40"
          duration={5000}
          rotation={0}
          style={styles.progress}
        >
          {(fill: number) => (
            <Text style={styles.progressText}>{Math.round(fill)}%</Text>
          )}
        </AnimatedCircularProgress>
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
    fontSize: 28,
    color: theme.colors.textLight,
    fontWeight: 'bold',
    marginBottom: theme.spacing.sm,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: theme.colors.textLight,
    textAlign: 'center',
    marginBottom: theme.spacing.lg,
  },
  progress: {
    marginTop: 20,
  },
  progressText: {
    color: theme.colors.textLight,
    fontSize: 18,
    fontWeight: '600',
  },
});
