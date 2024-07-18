'use client';

import React, { useEffect } from 'react';
import { Button, Flex, Input, message } from 'antd';
import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint';
import InputSelect from './InputSelect';
import ShippingInfo from './ShippingInfo';
import useCity from '@/hooks/useCity';
import useCost from '@/hooks/useCost';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

const pageVariants = {
  initial: {
    opacity: 0,
    x: '-100vw',
  },
  in: {
    opacity: 1,
    x: 0,
  },
  out: {
    opacity: 0,
    x: '100vw',
  },
};

const pageTransition = {
  type: 'tween',
  duration: 0.7,
};

export default function ContentCekOngkir() {
  const screens = useBreakpoint();
  const { city, loading: loadingCity, error: errorCity } = useCity();
  const router = useRouter();

  const {
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
  } = useCost();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      message.error('Please login to access this page.');
      router.push('/');
    }
  }, [router]);

  const handleSearch = () => {
    const token = localStorage.getItem('token');
    if (!token) {
      message.error('Please login to perform this action.');
      router.push('/');
    } else {
      postCostHooks();
    }
  };

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <Flex className="w-full" gap={8} wrap={screens.md ? 'nowrap' : 'wrap'}>
        <Flex className="w-full" gap={8}>
          <InputSelect
            showSearch={true}
            options={city.map((c: any) => ({
              label: c.city_name,
              value: String(c.city_id),
            }))}
            placeholder="Kota Asal"
            onChange={(value) => setOrigin(Number(value))}
            value={origin !== null ? String(origin) : undefined}
          />
          <InputSelect
            showSearch={true}
            options={city.map((c: any) => ({
              label: c.city_name,
              value: String(c.city_id),
            }))}
            placeholder="Kota Tujuan"
            onChange={(value) => setDestination(Number(value))}
            value={destination !== null ? String(destination) : undefined}
          />
        </Flex>
        <Flex className="w-full" gap={8}>
          <Input
            size="large"
            placeholder="Berat"
            type="number"
            addonAfter="gram"
            onChange={(e) => setWeight(Number(e.target.value))}
            value={weight !== null ? weight : ''}
          />
          <InputSelect
            showSearch={false}
            options={[
              { label: 'JNE', value: 'jne' },
              { label: 'TIKI', value: 'tiki' },
              { label: 'POS', value: 'pos' },
            ]}
            placeholder="Kurir"
            onChange={setCourier}
            value={courier !== null ? courier : undefined}
          />
        </Flex>
        <Button
          size="large"
          type="primary"
          block={!screens.md}
          onClick={handleSearch}
          loading={loading}
        >
          <p className="mb-0 px-8">Search</p>
        </Button>
      </Flex>
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      <ShippingInfo cost={cost} loading={loading} />
    </motion.div>
  );
}
