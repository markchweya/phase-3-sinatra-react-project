import React from 'react'

const Search = () => {

    const handleSearch = (e)=>{
        const value = e.target.value;
    }

  return (
   <form>
    <input type="text" placeholder='Search' onChange={handleSearch}/>
   </form>
  )
}

export default Search