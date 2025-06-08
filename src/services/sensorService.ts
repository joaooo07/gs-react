import axios from 'axios';
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
const API_BASE = 'http://localhost:8080/api';

export async function getSensors(farmId?: number): Promise<SensorListItem[]> {
  try {
    const url = farmId ? `${API_BASE}/farms/${farmId}/sensors` : `${API_BASE}/sensors`;
    const response = await axios.get<SensorListItem[]>(url);
    return response.data;
  } catch (error) {
    const json = await AsyncStorage.getItem(STORAGE_KEY);
    const allSensors = json ? JSON.parse(json) : [];
    return farmId ? allSensors.filter((s: SensorListItem) => s.farm_id === farmId) : allSensors;
  }
}

export async function saveSensor(sensor: SensorListItem): Promise<void> {
  try {
    await axios.post(`${API_BASE}/sensors`, sensor);
  } catch (error) {
    const sensors = await getSensors();
    sensors.push(sensor);
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(sensors));
  }
}
