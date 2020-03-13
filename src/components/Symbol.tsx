import React from 'react';
import { Card } from 'antd';

const Symbol: React.FC<Props> = props => {
  const symbol: string = props.propsSymbol.toUpperCase();
  return <Card title="Symbol">{symbol}</Card>;
};

export default Symbol;

interface Props {
  propsSymbol: string;
}
