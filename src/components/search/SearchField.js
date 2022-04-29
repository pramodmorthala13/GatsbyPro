import React from 'react'
import { SearchFieldStyles } from '../../styles/search/SearchFieldStyles'

const SearchField = ({value,setValue,onFocus}) => {
  return (
    <SearchFieldStyles>
        <input type="text"
        placeholder='Search'
        value={value}
        onChange={(e)=>setValue(e.target.value)}
        onFocus={onFocus && onFocus}
        />
    </SearchFieldStyles>
  )
}

export default SearchField