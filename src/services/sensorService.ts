// sensorService.ts

export type SensorListItem = {
  farm_id: number; // Corrigido de 'any' para 'number'
  sensor_id: number;
  sensor_type: string;
  description: string;
  zone_name: string;
  device_type: string;
  device_status: string;
  last_reading: string;
  timestamp: string;
};

export const sensoresMock: SensorListItem[] = [
  {
    farm_id: 1,
    sensor_id: 1,
    sensor_type: 'Temperatura',
    description: 'Sensor térmico da zona norte',
    zone_name: 'Norte',
    device_type: 'A1',
    device_status: 'ativo',
    last_reading: '38.6 °C',
    timestamp: '2024-06-01 14:23',
  },
  {
    farm_id: 1,
    sensor_id: 2,
    sensor_type: 'Umidade',
    description: 'Sensor de solo da zona sul',
    zone_name: 'Sul',
    device_type: 'A2',
    device_status: 'ativo',
    last_reading: '24%',
    timestamp: '2024-06-01 14:25',
  },
  {
    farm_id: 1,
    sensor_id: 3,
    sensor_type: 'Temperatura',
    description: 'Sensor de calor da zona oeste',
    zone_name: 'Oeste',
    device_type: 'A3',
    device_status: 'inativo',
    last_reading: '---',
    timestamp: '---',
  },
];

export async function getSensors(): Promise<SensorListItem[]> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(sensoresMock), 1000);
  });
}
