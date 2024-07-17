'use client';

import React, { useEffect } from 'react';
import { Button, Flex, Input } from 'antd';
import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint';
import InputSelect from './InputSelect';
import ShippingInfo from './ShippingInfo';
import useCity from '@/hooks/useCity';
import useCost from '@/hooks/useCost';

export default function ContentCekOngkir() {
  const screens = useBreakpoint();
  const { city, fetchCity, loading: loadingCity, error: errorCity } = useCity();

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
    console.log('City options:', city);
  }, [city]);

  const handleSearch = () => {
    postCostHooks();
  };

  return (
    <>
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
      <ShippingInfo cost={cost} />
    </>
  );
}
