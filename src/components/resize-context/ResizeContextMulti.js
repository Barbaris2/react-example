import React, { useState } from 'react';
import { ResizeProvider, ResizeConsumer } from 'react-resize-context';

import './resizeContextMulti.css';

const ResizeContextMulti = () => {
  const [size, setSize] = useState({});

  const getTitleDatasetBySize = ({ width, height }) => ({
    bigTitle: width > 150 && height > 200
  });

  const getContentDatasetBySize = ({ width, height }) => ({
    theme: width > 150 ? 'dark' : 'normal'
  });

  const handleSizeChanged = size => {
    setSize(size);
  };

  const renderTitle = () => {
    return (
      <ResizeConsumer
        className='header'
        updateDatasetBySize={getTitleDatasetBySize}
      >
        Header
      </ResizeConsumer>
    );
  };

  const renderContent = () => {
    return (
      <ResizeConsumer
        className='content'
        updateDatasetBySize={getContentDatasetBySize}
        onSizeChanged={handleSizeChanged}
      >
        {size.width}x{size.height}
      </ResizeConsumer>
    );
  };

  return (
    <ResizeProvider>
      <div className='containerMulti'>
        {renderTitle()}
        {renderContent()}
      </div>
    </ResizeProvider>
  );
};

export default ResizeContextMulti;
