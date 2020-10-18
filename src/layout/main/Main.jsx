import React from 'react';

import './main.css';

const Main = () => {
  return (
    <div className='main'>
      <h2>Example for React:</h2>
      <ul className='circle'>
        <li>
          <a
            href='https://reactjsexample.com/a-high-performance-react-component-for-responding-to-resize-event/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Resize-context
          </a>{' '}
        </li>
        <li>
          <a
            href='https://reactjsexample.com/empower-your-data-with-the-best-react-data-grid/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Data-grid
          </a>{' '}
        </li>
      </ul>
    </div>
  );
};

export default Main;
