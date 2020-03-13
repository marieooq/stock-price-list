import React from 'react';
import loadingImg from '../img/loading.gif';

const Loading: React.FC<Props> = (props): any => {
  console.log(`loading: ${props.loadingState}`);
  if (props.loadingState) {
    return <img src={loadingImg} alt="loading" />;
  } else {
    return false;
  }
};

export default Loading;

interface Props {
  loadingState: boolean;
}
