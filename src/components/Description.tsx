import React from 'react';
import { Card } from 'antd';

const Description: React.FC<Props> = props => {
  return <Card title="Description">{props.propsDescription}</Card>;
};

export default Description;

interface Props {
  propsDescription: string;
}
