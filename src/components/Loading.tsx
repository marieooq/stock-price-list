import React, { ReactElement } from 'react';
import loadingImg from '../img/loading.gif';

const loadingStyle = {
  backgroundColor: 'rgba(255, 255, 255, .2)',
  width: '100%',
  height: '100vh',
  zIndex: 99
};

const Loading: React.FC<Props> = (props): ReactElement => {
  if (props.loadingState) {
    return (
      <div className="loading_component" style={loadingStyle}>
        <img src={loadingImg} alt="loading" />
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default Loading;

interface Props {
  loadingState: boolean;
}
