import React, { useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import store from "../../store.json"
const SearchComponent = () => {
  const [value, setValue] = useState('');
  

  const handleChange = (e) => {
    setValue(e.target.value);
    // Call the hello function or perform any other action here
  };

  const handleSearch = () => {
    // Call the search function or perform any other action here
    console.log('Search for:', value);
  };

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
        <input
          type="text"
          value={value}
          onChange={handleChange}
          style={{ padding: '5px', marginRight: '8px' }}
        />
        <CiSearch size={30} onClick={handleSearch} style={{ cursor: 'pointer' }} />
      </div>
      
      <div className='dropdown'>
        {store.map((item, index) => (
          <div key={index} className='dropdown-row'>
            {   item.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchComponent;