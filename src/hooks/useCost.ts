import { useEffect, useState } from 'react';
import { postCost } from '@/api/api';

const useCost = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [cost, setCost] = useState<any>();
  const [origin, setOrigin] = useState<number | null>(null);
  const [destination, setDestination] = useState<number | null>(null);
  const [weight, setWeight] = useState<number | null>(null);
  const [courier, setCourier] = useState<string | null>(null);

  const postCostHooks = async () => {
    setLoading(true);
    try {
      const response = await postCost({ origin, destination, weight, courier });
      console.log(response);
      setCost(response.data);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    postCostHooks,
    cost,
    origin,
    destination,
    weight,
    courier,
    setOrigin,
    setDestination,
    setWeight,
    setCourier,
  };
};

export default useCost;
