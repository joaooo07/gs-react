export type Farm = {
  id: number;
  name: string;
  land: 'SMALL' | 'MEDIUM' | 'LARGE' | 'EXTRA_LARGE';
  address: {
    street: string;
    neighborhood: string;
    city: string;
    state: string;
  };
};

export const farmsMock: Farm[] = [
  {
    id: 1,
    name: 'Fazenda Boa Esperança',
    land: 'LARGE',
    address: {
      street: 'Estrada da Colheita',
      neighborhood: 'Zona Rural',
      city: 'Campinas',
      state: 'SP',
    },
  },
  {
    id: 2,
    name: 'Sítio Flor do Campo',
    land: 'SMALL',
    address: {
      street: 'Rua das Palmeiras',
      neighborhood: 'Verde Vale',
      city: 'Ribeirão Preto',
      state: 'SP',
    },
  },
];

export async function getFarms(): Promise<Farm[]> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(farmsMock), 1000);
  });
}
