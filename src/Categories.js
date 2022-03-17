import React from 'react'

const Categories = ({categories, filteredItems})=>{
  return(
    <div className="btn-container">
    {categories.map((category)=>{
      return(
        <button
      type="button"
      className="filter-btn"
      onClick={()=>filteredItems(category)}
    >
      {category}
    </button>
      )
      
    })}
    
    </div>
    )
}
export default Categories;