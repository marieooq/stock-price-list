import React from 'react';
import { Card } from 'antd';

const StockPrice: React.FC<Props> = props => {
  return <Card title="Current Stock Price">{props.propsPrice}</Card>;
};

export default StockPrice;

interface Props {
  propsPrice: string;
}
