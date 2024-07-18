'use client';

import 'antd/dist/reset.css';
import React from 'react';
import Nav from '@/components/Nav';
import ContentCekOngkir from '@/components/ContentCekOngkir';
import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint';

export default function Page() {
  const screens = useBreakpoint();
  return (
    <div className=" bg-white h-[100vh] ">
      <Nav />
      <div className={screens.sm ? 'mx-16 my-20' : 'mx-4 my-10'}>
        <ContentCekOngkir />
      </div>
    </div>
  );
}
