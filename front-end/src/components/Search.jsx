import React from 'react';

const Search = () => {
  const handleSearch = (e) => {
    const value = e.target.value;
    console.log(value); // Do something with the search value here
  };

  return (
    <form>
      <input type="text" placeholder="Search" onChange={handleSearch} />
    </form>
  );
};

export default Search;
