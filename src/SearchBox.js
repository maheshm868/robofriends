import React from 'react'

const SearchBox = function({searchField,searchChange}){
    return (
        <div className="pa2">
            <input 
                type='search' 
                placeholder='Search Robots!' 
                className="pa3 ba b--green bg-lightest-blue" 
                onChange={searchChange}
            />
        </div>
    )
}
export default SearchBox;