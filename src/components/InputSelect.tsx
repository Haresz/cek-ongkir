'use client';

import React from 'react';
import { Select } from 'antd';

const InputSelect = ({
  showSearch,
  options,
  placeholder,
}: {
  showSearch: boolean;
  options: { label: string; value: string }[];
  placeholder: string;
}) => (
  <Select
    showSearch={showSearch}
    style={{ width: '100%' }}
    size="large"
    placeholder={placeholder}
    optionFilterProp="label"
    filterSort={(optionA, optionB) =>
      (optionA?.label ?? '')
        .toLowerCase()
        .localeCompare((optionB?.label ?? '').toLowerCase())
    }
    options={options}
  />
);

export default InputSelect;
