import React from 'react';

const SearchBox = ({searchChange}) => {
  
    return (
        <div className='pa2'>
            <input 
            //className = 'input-reset ba b--black-20 pa2 mb2 db w-100'
            className = 'pa3 ba b--green bg-lightest-blue'
            type="search" 
            placeholder="search robots" 
            onChange={searchChange}
            />
        </div>
    );
}


export default SearchBox; 