import React from 'react';
import {
  Menu,
  MenuItem,
  MenuButton,
  SubMenu,
  MenuHeader,
  MenuDivider
} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';

import './menu.css';

const MenuBasic = () => {
  return (
    <div className='menu-container'>
      <h2>Basic menu:</h2>
      <Menu menuButton={<MenuButton>Open menu</MenuButton>}>
        <MenuItem>New File</MenuItem>
        <MenuItem>Save</MenuItem>
        <MenuItem>Close Window</MenuItem>
      </Menu>

      <h2>Basic menu:</h2>
      <Menu menuButton={<MenuButton>Open menu</MenuButton>}>
        <MenuItem>New File</MenuItem>
        <SubMenu label='Open'>
          <MenuItem>index.html</MenuItem>
          <MenuItem>example.js</MenuItem>
          <SubMenu label='Styles'>
            <MenuItem>about.css</MenuItem>
            <MenuItem>home.css</MenuItem>
            <MenuItem>index.css</MenuItem>
          </SubMenu>
        </SubMenu>
        <MenuItem>Save</MenuItem>
      </Menu>

      <h2>Header and divider:</h2>
      <Menu menuButton={<MenuButton>Open menu</MenuButton>}>
        <MenuItem>New File</MenuItem>
        <MenuItem>Save</MenuItem>
        <MenuItem>Close Window</MenuItem>
        <MenuDivider />
        <MenuHeader>Edit</MenuHeader>
        <MenuItem>Cut</MenuItem>
        <MenuItem>Copy</MenuItem>
        <MenuItem>Paste</MenuItem>
        <MenuDivider />
        <MenuItem>Print</MenuItem>
      </Menu>
    </div>
  );
};

export default MenuBasic;
