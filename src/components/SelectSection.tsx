import React from 'react';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const SelectSection: React.FC<Props> = props => {
  // const menuItems = props.symbolProps.map((val, index) => {
  //   console.log(val);
  //   return <Menu.Item key={index}>{val}</Menu.Item>;
  // });
  const arr = ['one', 'two', 'three', 'four', 'five'];

  const menuItems = arr.map((val, index) => {
    return <Menu.Item key={index}>{val}</Menu.Item>;
  });
  const menu = <Menu>{menuItems}</Menu>;
  console.log(menu);

  return (
    <>
      <Dropdown overlay={menu}>
        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
          Select the symbol <DownOutlined />
        </a>
      </Dropdown>
    </>
  );
};

export default SelectSection;

interface Props {
  symbolProps: string[];
}
