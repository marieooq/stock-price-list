import React from 'react';
import { Input } from 'antd';

const { Search } = Input;

const InputForm: React.FC<Props> = props => {
  return (
    <form onSubmit={props.onSubmitFunc}>
      <Search
        placeholder="Please enter a symbol. ex) AAPL, aapl"
        onChange={props.onChangeFunc}
        enterButton
      />
    </form>
  );
};

export default InputForm;

interface Props {
  onChangeFunc: (e: any) => void;
  onSubmitFunc: (e: any) => void;
}
