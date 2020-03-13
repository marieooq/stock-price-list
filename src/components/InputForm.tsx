import React from 'react';
import { Input } from 'antd';
import { useEffect } from 'react';

const { Search } = Input;

const InputForm: React.FC<Props> = props => {
  const [inputValue, setInputValue] = React.useState('');

  React.useEffect(() => {}, []);

  return (
    <form onSubmit={props.onSubmitFunc}>
      <Search
        placeholder="Please enter a symbol."
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
