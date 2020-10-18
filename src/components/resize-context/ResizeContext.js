import React, { useState } from 'react';
import { ResizeProvider, ResizeConsumer } from 'react-resize-context';

import './resizeContex.css';

const ResizeContext = () => {
  const [size, setSize] = useState({});

  const getDatasetBySize = size => ({
    widthRange: size.width > 200 ? 'large' : 'small',
    heightRange: size.height > 200 ? 'large' : 'small'
  });

  const handleSizeChanged = size => {
    setSize(size);
  };

  return (
    <ResizeProvider>
      <ResizeConsumer
        className='container'
        onSizeChanged={handleSizeChanged}
        updateDatasetBySize={getDatasetBySize}
      >
        <span>width: {size.width}</span>
        <span>height: {size.height}</span>
      </ResizeConsumer>
    </ResizeProvider>
  );
};

export default ResizeContext;
