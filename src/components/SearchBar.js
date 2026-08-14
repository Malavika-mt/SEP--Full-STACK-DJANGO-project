import React , { useState } from 'react';

function SearchBar() {
    const [query, setQuery] = useState('');
    const handleChange = (event) => {
        setQuery(event.target.value);
    };

    return (
        <div>
            <p> Search for Courses</p>
            <input
                type="text"
                value={query}
                onChange={handleChange} />
            <p>Searching for: {query}  </p>
        </div>

    );

}

export default SearchBar;