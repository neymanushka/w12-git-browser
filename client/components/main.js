import React, { useState } from 'react'

const MainView = (props) => {
  const [searchValue, setSearchValue] = useState('')

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
        <input
          id="input-field"
          style={{ border: '1px solid black', color: 'black' }}
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button type="button" id="search-button" onClick={() => props.onSearchClick(searchValue)}>
          Search
        </button>
      </div>
    </div>
  )
}

export default React.memo(MainView)
