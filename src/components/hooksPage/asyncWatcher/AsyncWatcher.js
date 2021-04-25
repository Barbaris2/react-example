import React from 'react';
import { useAsyncWatcher } from 'react-async-watcher';

const AsyncWatcher = () => {
  const { execute, reset, status, result, error } = useAsyncWatcher();
  return (
    <div>
      <h3>Quick Start</h3>
      <button
        onClick={() => {
          execute(async () => {
            const response = await fetch(
              'https://jsonplaceholder.typicode.com/users'
            );
            await new Promise(resolve => setTimeout(resolve, 2000));
            const result = await response.json();
            return result;
          });
        }}
      >
        Get User List
      </button>
      <button onClick={reset}>Reset</button>
      <button
        onClick={() => {
          execute(async () => {
            throw Error('This is a fake error');
          });
        }}
      >
        Throw Error
      </button>
      {status === 'loading' && <p>loading</p>}
      {status === 'failure' && <p>{error.message}</p>}
      {result ? (
        <div>
          {result.map(user => (
            <p key={user.id}>{user.username}</p>
          ))}
        </div>
      ) : (
        <p>Empty</p>
      )}
    </div>
  );
};

export default AsyncWatcher;
