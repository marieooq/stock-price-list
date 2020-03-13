import React from 'react';
import { Card } from 'antd';

const Symbol: React.FC<Props> = props => {
  return <Card title="Symbol">{props.propsSymbol}</Card>;
};

export default Symbol;

interface Props {
  propsSymbol: string;
}
