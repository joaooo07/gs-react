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

export async function getFarms(): Promise<Farm[]> {
  const json = await AsyncStorage.getItem(STORAGE_KEY);
  return json ? JSON.parse(json) : [];
}

export async function saveFarm(newFarm: Farm): Promise<void> {
  const farms = await getFarms();
  farms.push(newFarm);
  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(farms));
}
