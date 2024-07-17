import { useEffect, useState } from 'react';
import { getCity } from '@/api/api';

const useCity = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [city, setCity] = useState<any>([]);

  const fetchCity = async () => {
    setLoading(true);
    try {
      const response = await getCity();
      console.log(response);
      setCity([...response.data.results]);
    } catch (error: any) {
      setError(error.message);
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
