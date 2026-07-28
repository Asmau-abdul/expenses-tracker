import React from 'react'
import '../styles/filterBar.scss'

const FilterBar = ({onFilter, currentFilter}) => {
  return (
    <>
        <div className='filter-bar'>
            {['all', 'income', 'food', 'transport', 'health'].map( f => (
                <button key={f} 
                onClick={() => onFilter(f)}
                className={currentFilter === f ? 'active' : ''}>
                    {f.charAt(0).toUpperCase() + f.slice(1)}
                </button>
            ))}
        </div>
    </>
  )
}

export default FilterBar