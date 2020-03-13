import React from 'react';
import { Input } from 'antd';
import { useEffect } from 'react';

const InputForm: React.FC<Props> = props => {
  const [inputValue, setInputValue] = React.useState('');

  React.useEffect(() => {}, []);

  return (
    <form onSubmit={props.onSubmitFunc}>
      <Input
        placeholder="Please type a symbol that you're looking for. ex)APPL"
        onChange={props.onChangeFunc}
      />
      <button type="submit">search</button>
    </form>
  );
};

export default InputForm;

interface Props {
  onChangeFunc: (e: any) => void;
  onSubmitFunc: (e: any) => void;
}
