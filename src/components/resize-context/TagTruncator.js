import React from 'react';
import { useTagTruncator } from 'react-use-tag-truncator';
import style from './List.css';

const TagTruncator = () => {
  const [
    containerRef,
    isExtended,
    toggleExtend,
    hiddenCount,
  ] = useTagTruncator();

  return (
    <ul
      ref={containerRef}
      style={{
        height: isExtended ? 'none' : '65px',
        width: '300px',
        display: 'flex',
        flexWrap: 'wrap',
      }}
    >
      {Array.from({ length: 26 }).map((_, index) => (
        <li key={index}>item #{index + 1}</li>
      ))}
      <li onClick={toggleExtend}>
        {isExtended ? 'Hide' : `+ ${hiddenCount} more...`}
      </li>
    </ul>
  );
};

export default TagTruncator;
