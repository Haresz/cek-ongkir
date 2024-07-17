import axios from 'axios';

const apikey = '8a9ec5364124d113a8b9ed149415d05c';

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
