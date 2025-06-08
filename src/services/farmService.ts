import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export type Farm = {
  id: number;
  name: string;
  land: 'SMALL' | 'MEDIUM' | 'LARGE' | 'EXTRA_LARGE';
  address: {
    street: string;
    neighborhood: string;
    city: string;
    state: string;
    zipcode?: string;
    number?: string;
    complement?: string;
  };
};

const STORAGE_KEY = 'FARMS';
const API_URL = 'http://<SEU_IP>:<PORTA>/api/farms'; // substitua depois

export async function getFarms(): Promise<Farm[]> {
  try {
    const response = await axios.get<Farm[]>(API_URL);
    return response.data;
  } catch (error) {
    const json = await AsyncStorage.getItem(STORAGE_KEY);
    return json ? JSON.parse(json) : [];
  }
}

export async function saveFarm(newFarm: Farm): Promise<void> {
  try {
    await axios.post(API_URL, newFarm);
  } catch (error) {
    const farms = await getFarms();
    farms.push(newFarm);
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(farms));
  }
}
