import axios from 'axios';

export const getCity = () => {
  return axios.get(`https://harisekeke.vercel.app/api/kota`);
};

export const postCost = ({
  origin,
  destination,
  weight,
  courier,
}: {
  origin: number | null;
  destination: number | null;
  weight: number | null;
  courier: string | null;
}) => {
  return axios.post(`https://harisekeke.vercel.app/api/ongkir`, {
    origin,
    destination,
    weight,
    courier,
  });
};
