'use client';

import React from 'react';
import { Button, Flex, Input } from 'antd';
import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint';
import InputSelect from './InputSelect';
import ShippingInfo from './ShippingInfo';
import useCity from '@/hooks/useCity';

export default function ContentCekOngkir() {
  const screens = useBreakpoint();
  const { city, fetchCity, loading, error } = useCity();

  const originOptions = [
    { label: 'Jakarta', value: 'jakarta' },
    { label: 'Surabaya', value: 'surabaya' },
  ];

  const destinationOptions = [
    { label: 'Bandung', value: 'bandung' },
    { label: 'Medan', value: 'medan' },
  ];

  const courierOptions = [
    { label: 'JNE', value: 'jne' },
    { label: 'TIKI', value: 'tiki' },
  ];

  return (
    <>
      <Flex className="w-full" gap={8} wrap={screens.md ? 'nowrap' : 'wrap'}>
        <Flex className="w-full" gap={8}>
          <InputSelect
            showSearch={true}
            options={originOptions}
            placeholder="Kota Asal"
          />
          <InputSelect
            showSearch={true}
            options={destinationOptions}
            placeholder="Kota Tujuan"
          />
        </Flex>
        <Flex className="w-full" gap={8}>
          <Input
            size="large"
            placeholder="Berat"
            type="number"
            addonAfter="gram"
          />
          <InputSelect
            showSearch={false}
            options={courierOptions}
            placeholder="Kurir"
          />
        </Flex>
        <Button size="large" type="primary" block={!screens.md}>
          <p className="mb-0 px-8">Search</p>
        </Button>
      </Flex>
      <ShippingInfo />
    </>
  );
}
