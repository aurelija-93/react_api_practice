import React from "react";

const Filter = function({genreList, getSongs}) {
    const genreOptions = genreList.map((genre, index) => {
        return <option value={index}>{genre.name}</option>
    });

    const onFilterChange = function(evt) {
        const index = evt.target.value;
        const selectedFilter = genreList[index];
        getSongs(selectedFilter.name);
    }

    return (
        <div className="dropdown">
            <label htmlFor="filter">Filter by genre:</label>
            <select name="filter" defaultValue="0" onChange={onFilterChange}>
                {genreOptions}
            </select>
        </div>
    )
}

export default Filter;