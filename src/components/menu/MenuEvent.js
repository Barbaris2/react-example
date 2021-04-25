import React, { useRef, useState, useLayoutEffect } from 'react';
import {
  Menu,
  MenuItem,
  MenuButton,
  MenuRadioGroup,
  SubMenu,
  MenuHeader,
  MenuDivider
} from '@szhsin/react-menu';

import './menu.css';
import '@szhsin/react-menu/dist/index.css';

const MenuEvent = () => {
  const ref = useRef(null);
  const [text, setText] = useState('');

  const [textColor, setTextColor] = useState('red');

  const [isBold, setBold] = useState(true);
  const [isItalic, setItalic] = useState(false);
  const [isUnderline, setUnderline] = useState(false);

  const handleMenuClick = e => {
    setText(t => t + `[Menu] ${e.value} clicked\n\n`);
  };

  const handleFileClick = e => {
    setText(t => t + `[MenuItem] ${e.value} clicked\n`);
  };

  const handleSaveClick = e => {
    setText(t => t + `[MenuItem] ${e.value} clicked\n\n`);
    return false;
  };

  useLayoutEffect(() => {
    ref.current.scrollTop = ref.current.scrollHeight;
  }, [text]);

  return (
    <div className='menu-container'>
      <h2>Event handling:</h2>

      <div className='menu-group'>
        <div className='double-grid'>
          <Menu
            menuButton={<MenuButton>Open menu</MenuButton>}
            onClick={handleMenuClick}
          >
            <MenuItem value='File' onClick={handleFileClick}>
              New File
            </MenuItem>

            <MenuItem value='Save' onClick={handleSaveClick}>
              Save
            </MenuItem>

            <MenuItem value='Close'>Close Window</MenuItem>
          </Menu>

          <button onClick={() => setText('')}>Clear</button>
        </div>
        <textarea readOnly ref={ref} value={text} />
      </div>

      <h2>Radio group:</h2>
      <div className='radio-group'>
        <Menu menuButton={<MenuButton>Text color</MenuButton>}>
          <MenuRadioGroup
            value={textColor}
            onChange={e => setTextColor(e.value)}
          >
            <MenuItem value='red'>Red</MenuItem>
            <MenuItem value='green'>Green</MenuItem>
            <MenuItem value='blue'>Blue</MenuItem>
          </MenuRadioGroup>
        </Menu>

        <div className='sample-text' style={{ color: textColor }}>
          Sample text
        </div>
      </div>

      <h2>Check group:</h2>
      <div className='radio-group'>
        <Menu menuButton={<MenuButton>Text style</MenuButton>}>
          <MenuItem
            type='checkbox'
            checked={isBold}
            onClick={e => setBold(e.checked)}
          >
            Bold
          </MenuItem>
          <MenuItem
            type='checkbox'
            checked={isItalic}
            onClick={e => setItalic(e.checked)}
          >
            Italic
          </MenuItem>
          <MenuItem
            type='checkbox'
            checked={isUnderline}
            onClick={e => setUnderline(e.checked)}
          >
            Underline
          </MenuItem>
        </Menu>

        <div
          className='sample-text'
          style={{
            fontWeight: isBold ? 'bold' : 'initial',
            fontStyle: isItalic ? 'italic' : 'initial',
            textDecoration: isUnderline ? 'underline' : 'initial'
          }}
        >
          Sample text
        </div>
      </div>

      <h2>Combined example:</h2>
      <div className='radio-group'>
        <Menu menuButton={<MenuButton>Open menu</MenuButton>}>
          <MenuItem>New File</MenuItem>
          <MenuItem>Save</MenuItem>
          <MenuDivider />
          <MenuHeader>Text settings</MenuHeader>

          <SubMenu label='Text color'>
            <MenuRadioGroup
              value={textColor}
              onChange={e => setTextColor(e.value)}
            >
              <MenuItem value={'red'}>Red</MenuItem>
              <MenuItem value={'green'}>Green</MenuItem>
              <MenuItem value={'blue'}>Blue</MenuItem>
            </MenuRadioGroup>
          </SubMenu>

          <SubMenu label='Text style'>
            <MenuItem
              type='checkbox'
              checked={isBold}
              onClick={e => setBold(e.checked)}
            >
              Bold
            </MenuItem>
            <MenuItem
              type='checkbox'
              checked={isItalic}
              onClick={e => setItalic(e.checked)}
            >
              Italic
            </MenuItem>
            <MenuItem
              type='checkbox'
              checked={isUnderline}
              onClick={e => setUnderline(e.checked)}
            >
              Underline
            </MenuItem>
          </SubMenu>
        </Menu>

        <div
          className='sample-text'
          style={{
            color: textColor,
            fontWeight: isBold ? 'bold' : 'initial',
            fontStyle: isItalic ? 'italic' : 'initial',
            textDecoration: isUnderline ? 'underline' : 'initial'
          }}
        >
          Sample text
        </div>
      </div>
    </div>
  );
};

export default MenuEvent;
