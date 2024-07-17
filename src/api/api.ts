import axios from 'axios';

const apikey = '8a9ec5364124d113a8b9ed149415d05c';

export const getCity = () => {
  return axios.get(`https://api.rajaongkir.com/starter/city,`, {
    headers: {
      key: apikey,
    },
  });
};

export const cost = () => {
  return axios.post(
    `https://api.rajaongkir.com/starter/cost`,
    {},
    {
      headers: {
        key: apikey,
      },
    },
  );
};
