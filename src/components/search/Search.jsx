import React from 'react'

const Search = ({inputValue,onHandleChange}) => {
  return (
    <div className='--form-control'>
        <input type="text" placeholder='Search product' value={inputValue} onChange={onHandleChange}/>
    </div>
  )
}

export default Search