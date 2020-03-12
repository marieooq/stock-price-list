import React from 'react';
import { Input } from 'antd';
import { useEffect } from 'react';

const SelectSection: React.FC<Props> = props => {
  const [inputValue, setInputValue] = React.useState('');

  React.useEffect(() => {}, []);

  const handle = (e: any) => {
    setInputValue(e.target.value);
    console.log(e.target.value);
  };

  return (
    <Input
      placeholder="Please type a symbol that you're looking for. ex)APPL"
      onChange={handle}
    />
  );
};

export default SelectSection;

interface Props {
  symbolProps: string[];
}
