'use client';

import React from 'react';
import { Row, Col, Skeleton } from 'antd';
import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint';

const formatRupiah = (number: number) => {
  return 'RP ' + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
};

const ShippingInfo = ({ cost, loading }: any) => {
  const screens = useBreakpoint();

  if (!cost || !cost.rajaongkir || !cost.rajaongkir.results) {
    return null;
  }

  const shippingDetails = cost.rajaongkir.results[0];
  const serviceDetails = shippingDetails.costs[0];

  return (
    <div className="w-full my-10 px-8 py-6 border-2 rounded-md text-gray-700">
      <Row justify="space-between">
        {loading ? (
          <Skeleton style={{ height: '100px' }} />
        ) : (
          <>
            <Col span={screens.sm ? 8 : 24} className="mb-4">
              <div
                className={
                  screens.sm ? 'text-2xl font-bold' : 'text-lg font-bold'
                }
              >
                {shippingDetails.name}
              </div>
              {screens.sm && (
                <div className="text-base">{shippingDetails.description}</div>
              )}
            </Col>
            <Col span={screens.sm ? 8 : 24} className="mb-4">
              <div
                className={
                  screens.sm
                    ? 'text-xl text-gray-400'
                    : 'text-base text-gray-400'
                }
              >
                {serviceDetails.service}
              </div>
              {screens.sm && (
                <div className="text-base">{serviceDetails.description}</div>
              )}
            </Col>
            <Col span={screens.sm ? 8 : 24} className="mb-4">
              <div
                className={
                  screens.sm
                    ? 'text-2xl font-bold text-orange-400'
                    : 'text-base font-bold text-orange-400'
                }
              >
                {formatRupiah(serviceDetails.cost[0].value)}
              </div>
              <div
                className={
                  screens.sm
                    ? 'text-base text-gray-400'
                    : 'text-sm text-gray-400'
                }
              >
                Estimasi: {serviceDetails.cost[0].etd} hari
              </div>
            </Col>
          </>
        )}
      </Row>
    </div>
  );
};

export default ShippingInfo;
