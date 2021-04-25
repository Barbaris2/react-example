import React from 'react';

import Typewriter from 'react-simple-typewriter';
import 'react-simple-typewriter/dist/index.css';


interface TypewriterConfig {
  words: string[]
  loop?: boolean
  typeSpeed?: number 
  deleteSpeed?: number 
  delaySpeed?: number 
  onLoop?: (loopCount: number) => void  // only called if loop = true
  onDone?: () => void  // only called if loop = false
}


const TypewriterUsage = () => {
  return (
    <div>
      <h1
        // style={{ paddingTop: '5rem', margin: 'auto 0', fontWeight: 'normal' }}
        style={{ textAlign: 'center', paddingTop: '5rem' }}
      >
        Life is simple{' '}
        <span style={{ color: 'red', fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            loop
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            words={['Eat', 'Sleep', 'Code', 'and love', 'Repeat!']}
            // onLoop={loopCount =>
            //   console.log(`Just completed loop ${loopCount}`)
            // }
          />
        </span>
      </h1>
    </div>
  );
};

export default TypewriterUsage;
