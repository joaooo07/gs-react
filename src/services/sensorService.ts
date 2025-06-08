import AsyncStorage from '@react-native-async-storage/async-storage';

export type SensorListItem = {
  farm_id: number;
  sensor_id: number;
  sensor_type: string;
  description: string;
  zone_name: string;
  device_type: string;
  device_status: string;
  last_reading: string;
  timestamp: string;
};

const STORAGE_KEY = 'SENSORS';

export async function getSensors(): Promise<SensorListItem[]> {
  const json = await AsyncStorage.getItem(STORAGE_KEY);
  return json ? JSON.parse(json) : [];
}

export async function saveSensor(sensor: SensorListItem): Promise<void> {
  const sensors = await getSensors();
  sensors.push(sensor);
  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(sensors));
}
