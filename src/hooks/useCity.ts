import { useEffect, useState } from 'react';
import { getCity } from '@/api/api';

const useCity = () => {
  const [city, setCity] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchCity = async () => {
    setLoading(true);
    try {
      const response = await getCity();
      console.log(response);
      setCity(response.data.rajaongkir.results);
    } catch (err: any) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCity();
  }, []);

  return { city, fetchCity, loading, error };
};

export default useCity;
