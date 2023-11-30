import React, { useState } from 'react';
import Navbar from './Components/Navbar';
 import Cars from './Components/Cars';

function App() {
  const [search, setSearch] = useState('');

  const handleSearch = (searchValue) => {
    setSearch(searchValue);
  };

  return (
    <div>
      <Navbar onSearch={handleSearch} />
      <Cars search={search} />
    </div>
  );
}

export default App;
