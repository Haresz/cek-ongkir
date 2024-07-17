import { Package } from '@phosphor-icons/react/dist/ssr';
import { Flex } from 'antd';
import React from 'react';

export default function Nav() {
  return (
    <Flex align="center" className="px-16 py-8 bg-orange-500">
      <Package size={42} />
      <p className=" mb-0 ml-4 font-extrabold font-mono sm:text-4xl text-2xl">
        Cek Paket
      </p>
    </Flex>
  );
}
