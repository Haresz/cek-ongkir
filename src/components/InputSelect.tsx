'use client';

import React, { useEffect } from 'react';
import { Select } from 'antd';

const InputSelect = ({
  showSearch,
  options,
  placeholder,
  onChange,
  value,
}: {
  showSearch: boolean;
  options: { label: string; value: string }[];
  placeholder: string;
  onChange: (value: string) => void;
  value: string | undefined;
}) => {
  return (
    <Select
      showSearch={showSearch}
      style={{ width: '100%', color: 'black' }}
      size="large"
      placeholder={placeholder}
      optionFilterProp="label"
      filterSort={(optionA, optionB) =>
        (optionA?.label ?? '')
          .toLowerCase()
          .localeCompare((optionB?.label ?? '').toLowerCase())
      }
      options={options}
      onChange={onChange}
      value={value}
    />
  );
};

export default InputSelect;
