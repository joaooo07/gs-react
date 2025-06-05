import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import AppBar from '../components/AppBar';
import { theme } from '../styles/Theme';
import { getFarms, Farm } from '../services/farmService';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/Routes';

const landMap = {
  SMALL: 'Pequena',
  MEDIUM: 'Média',
  LARGE: 'Grande',
  EXTRA_LARGE: 'Muito Grande',
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'FarmList'>;

export default function FarmListScreen() {
  const [farms, setFarms] = useState<Farm[]>([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation<NavigationProp>();

  useEffect(() => {
    getFarms().then((data) => {
      setFarms(data);
      setLoading(false);
    });
  }, []);

  return (
    <LinearGradient colors={['#0C2D48', '#F05A28']} style={styles.container}>
      <AppBar />
      <View style={styles.content}>
        <Text style={styles.title}>Fazendas Cadastradas</Text>
        {loading ? (
          <ActivityIndicator size="large" color="#fff" />
        ) : (
          <FlatList
            data={farms}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.card}
                onPress={() => navigation.navigate('FarmDetail', { farm: item })}
              >
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.land}>Tamanho: {landMap[item.land]}</Text>
                <Text style={styles.address}>
                  {item.address.street}, {item.address.neighborhood}
                </Text>
                <Text style={styles.city}>
                  {item.address.city} - {item.address.state}
                </Text>
              </TouchableOpacity>
            )}
          />
        )}
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
    fontSize: 22,
    color: theme.colors.textLight,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: theme.spacing.md,
  },
  card: {
    backgroundColor: '#ffffff22',
    padding: theme.spacing.md,
    borderRadius: 10,
    marginBottom: theme.spacing.sm,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: theme.colors.textLight,
  },
  land: {
    fontSize: 14,
    color: '#ddd',
    marginTop: 4,
  },
  address: {
    fontSize: 14,
    color: '#ccc',
  },
  city: {
    fontSize: 14,
    color: '#ccc',
    fontStyle: 'italic',
  },
});
