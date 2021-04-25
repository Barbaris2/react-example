import React from 'react';
import ReactDataGrid from '@inovua/reactdatagrid-community';
import '@inovua/reactdatagrid-community/index.css';
import Flag from 'react-world-flags';

import './data-grid.css';

const DataGrid = () => {
  const icon = (
    <svg
      key='icon'
      fill='#9ba7b4'
      style={{ verticalAlign: 'middle' }}
      height='24'
      viewBox='0 0 24 24'
      width='24'
    >
      <path d='M9 11.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zm6 0c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-.29.02-.58.05-.86 2.36-1.05 4.23-2.98 5.21-5.37C11.07 8.33 14.05 10 17.42 10c.78 0 1.53-.09 2.25-.26.21.71.33 1.47.33 2.26 0 4.41-3.59 8-8 8z' />
      <path d='M0 0h24v24H0z' fill='none' />
    </svg>
  );

  const columns = [
    { name: 'firstName', header: 'First Name', defaultFlex: 1 },
    { name: 'lastName', header: 'Last Name', defaultFlex: 1 },
    {
      id: 'fullName',
      header: <b>{icon} Full Name</b>,
      minWidth: 100,
      defaultFlex: 1,
      render: ({ data }) => data.firstName + ' ' + data.lastName
    },
    {
      name: 'country',
      header: 'Country',
      width: 100,
      render: ({ value }) => {
        return [value] ? <Flag code={value} height='16' /> : 'unknown';
      }
    },
    {
      name: 'age',
      header: 'Age',
      defaultWidth: 70,
      render: ({ value }) => (
        <span style={{ color: value < 18 ? 'red' : 'inherit' }}>{value}</span>
      )
    }
  ];

  const gridStyle = { minHeight: 300 };

  const dataSource = [
    { id: 1, firstName: 'John', lastName: 'Grayner', country: 'usa', age: 35 },
    { id: 2, firstName: 'Mary', lastName: 'Stones', country: 'ca', age: 25 },
    { id: 3, firstName: 'Robert', lastName: 'Fil', country: 'nor', age: 27 },
    { id: 4, firstName: 'Mark', lastName: 'Twain', country: 'rus', age: 81 },
    {
      id: 5,
      firstName: 'Billary',
      lastName: 'Konwik',
      country: 'ca',
      age: 18
    },
    {
      id: 6,
      firstName: 'Bob',
      lastName: 'Martin',
      country: 'ad',
      age: 18
    },
    {
      id: 7,
      firstName: 'Matthew',
      lastName: 'Richardson',
      country: 'ar',
      age: 54
    },
    {
      id: 8,
      firstName: 'Ritchie',
      lastName: 'Peterson',
      country: 'au',
      age: 54
    },
    {
      id: 9,
      firstName: 'Bryan',
      lastName: 'Martin',
      country: 'jp',
      age: 40
    },
    {
      id: 10,
      firstName: 'Mark',
      lastName: 'Martin',
      country: 'gb',
      age: 44
    },
    {
      id: 11,
      firstName: 'Michelle',
      lastName: 'Sebastian',
      country: 'in',
      age: 24
    },
    {
      id: 12,
      firstName: 'Michelle',
      lastName: 'Sullivan',
      country: 'kr',
      age: 61
    },
    {
      id: 13,
      firstName: 'Jordan',
      lastName: 'Bike',
      country: 'sk',
      age: 16
    },
    {
      id: 14,
      firstName: 'Nelson',
      lastName: 'Ford',
      country: 'ua',
      age: 34
    },
    {
      id: 15,
      firstName: 'Tim',
      lastName: 'Cheap',
      country: 'za',
      age: 3
    },
    {
      id: 16,
      firstName: 'Robert',
      lastName: 'Carlson',
      country: 'mr',
      age: 31
    },
    {
      id: 17,
      firstName: 'Johny',
      lastName: 'Perterson',
      country: 'me',
      age: 40
    }
  ];

  return (
    <div className='container-grid'>
      <h2>Data-grid simple table:</h2>
      <ReactDataGrid
        idProperty='id'
        columns={columns}
        dataSource={dataSource}
        style={gridStyle}
      />
    </div>
  );
};

export default DataGrid;
