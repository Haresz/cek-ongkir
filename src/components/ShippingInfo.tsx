'use client';

import React from 'react';
import { Flex } from 'antd';
import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint';

const ShippingInfo = () => {
  const screens = useBreakpoint();

  return (
    <Flex className="w-full my-10 px-8 py-6 border-2 rounded-md text-gray-700">
      <Flex className="w-full" justify="space-between">
        <Flex vertical>
          <div
            className={screens.sm ? 'text-2xl font-bold' : 'text-lg font-bold'}
          >
            JNE
          </div>
          <div className={screens.sm ? 'text-base' : 'hidden'}>
            Jalur Nugraha Ekakurir
          </div>
        </Flex>
        <Flex vertical justify="space-between">
          <div
            className={
              screens.sm ? 'text-xl text-gray-400' : 'text-base text-gray-400'
            }
          >
            REG
          </div>
          <div className={screens.sm ? 'text-base' : 'hidden'}>Regular</div>
        </Flex>
        <Flex vertical>
          <div
            className={
              screens.sm
                ? 'text-2xl font-bold text-orange-400'
                : 'text-base font-bold text-orange-400'
            }
          >
            RP 0
          </div>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ShippingInfo;
