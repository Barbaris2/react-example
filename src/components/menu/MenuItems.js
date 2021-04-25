import React from 'react';
import { Menu, MenuItem, MenuButton, MenuDivider } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';

const MenuItems = () => {
  return (
    <div className='menu-container'>
      <h2>Link and disabled:</h2>
      <div className='link-disabled'>
        <Menu menuButton={<MenuButton>Open menu</MenuButton>}>
          <MenuItem href='https://www.google.com/'>Google</MenuItem>
          <MenuItem
            href='https://github.com/szhsin/react-menu/'
            target='_blank'
          >
            GitHub (new window)
          </MenuItem>
          <MenuItem>Regular item</MenuItem>
          <MenuItem disabled>Disabled item</MenuItem>
        </Menu>
      </div>

      <h2>Icon and image:</h2>
      <div className='icon-img'>
        <Menu menuButton={<MenuButton>Open menu</MenuButton>}>
          <MenuItem>
            <i className='material-icons'>content_cut</i>Cut
          </MenuItem>
          <MenuItem>
            <i className='material-icons'>content_copy</i>Copy
          </MenuItem>
          <MenuItem>
            <i className='material-icons'>content_paste</i>Paste
          </MenuItem>
          <MenuDivider />
          <MenuItem href='https://github.com/'>
            <img
              src={require('./images/octocat.png')}
              alt=''
              role='presentation'
            />
            GitHub
          </MenuItem>
        </Menu>
      </div>

      <h2>Hover and active:</h2>
      <div className='hover-active'>
        <Menu menuButton={<MenuButton>Open menu</MenuButton>}>
          <MenuItem>
            {({ hover, active }) =>
              active ? 'Active' : hover ? 'Press me' : 'Hover me'
            }
          </MenuItem>
          <MenuDivider />
          <MenuItem styles={{ justifyContent: 'center' }}>
            {({ hover, active }) => (
              <i className='material-icons md-48'>
                {active
                  ? 'sentiment_very_satisfied'
                  : hover
                  ? 'sentiment_satisfied_alt'
                  : 'sentiment_very_dissatisfied'}
              </i>
            )}
          </MenuItem>
        </Menu>
      </div>

      <h2>Focusable item:</h2>
    </div>
  );
};

export default MenuItems;
