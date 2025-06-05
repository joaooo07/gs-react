// SensorScreen.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import AppBar from '../components/AppBar';
import { theme } from '../styles/Theme';
import { getSensors, SensorListItem } from '../services/sensorService';
import { useRoute, RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/Routes';

type SensorScreenRouteProp = RouteProp<RootStackParamList, 'SensorList'>;

export default function SensorScreen() {
  const [loading, setLoading] = useState(true);
  const [sensors, setSensors] = useState<SensorListItem[]>([]);
  const route = useRoute<SensorScreenRouteProp>();
  const { farmId } = route.params;

  useEffect(() => {
    getSensors().then((data) => {
      const filtered = data.filter((sensor) => sensor.farm_id === farmId);
      setSensors(filtered);
      setLoading(false);
    });
  }, [farmId]);

  return (
    <LinearGradient colors={['#0C2D48', '#F05A28']} style={styles.container}>
      <AppBar />
      <View style={styles.content}>
        <Text style={styles.title}>Sensores da Fazenda 🌾</Text>
        {loading ? (
          <ActivityIndicator size="large" color="#fff" />
        ) : (
          <FlatList
            data={sensors}
            keyExtractor={(item) => item.sensor_id.toString()}
            renderItem={({ item }) => (
              <View style={styles.card}>
                <Text style={styles.sensorName}>{item.sensor_type} - Zona {item.zone_name}</Text>
                <Text style={styles.description}>{item.description}</Text>
                <Text style={styles.details}>Dispositivo: {item.device_type} ({item.device_status})</Text>
                <Text style={styles.details}>Última Leitura: {item.last_reading}</Text>
                <Text style={styles.timestamp}>Data da Leitura: {item.timestamp}</Text>
              </View>
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
    color: theme.colors.textLight,
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: theme.spacing.md,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#ffffff22',
    padding: theme.spacing.md,
    borderRadius: 10,
    marginBottom: theme.spacing.md,
  },
  sensorName: {
    color: theme.colors.textLight,
    fontSize: 18,
    fontWeight: '600',
  },
  description: {
    color: '#ddd',
    fontSize: 14,
    marginVertical: 4,
  },
  details: {
    color: '#eee',
    fontSize: 14,
  },
  timestamp: {
    color: '#ccc',
    fontSize: 12,
    marginTop: 4,
    fontStyle: 'italic',
  },
});
