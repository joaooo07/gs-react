import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export type User = {
  id: number;
  name: string;
  email: string;
  password: string;
};

const STORAGE_KEY = 'USERS';
const API_URL = 'http://<SEU_IP>:<PORTA>/api/usuarios'; // ajuste conforme necessário

export const mockUsers: User[] = [
  {
    id: 1,
    name: 'João Motta',
    email: 'teste',
    password: 'teste',
  },
  {
    id: 2,
    name: 'João Motta',
    email: 'joao@harvestime.com',
    password: '123456',
  },
];

export async function getUsers(): Promise<User[]> {
  try {
    const response = await axios.get<User[]>(API_URL);
    return response.data;
  } catch (error) {
    const local = await AsyncStorage.getItem(STORAGE_KEY);
    return local ? JSON.parse(local) : mockUsers;
  }
}

export async function saveUser(user: User): Promise<void> {
  try {
    await axios.post(API_URL, user);
  } catch (error) {
    const users = await getUsers();
    users.push(user);
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(users));
  }
}
