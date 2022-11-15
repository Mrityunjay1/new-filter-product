import React from 'react'
import './Categories.css'

const Categories = ({allCategories, filterItems}) => {
  return (
    <div className="--flex-center">
        {allCategories.map((item,index)=>{
          return(
            <button type='button' className='btn --btn --btn-secondary'key={index} onClick={()=>filterItems(item)}>{item.charAt(0).toUpperCase() + item.slice(1)}</button>
          )
          
        })}
    </div>
    
  )
}

export default Categories