import React from 'react';

const SearchBox = ({ searchField, onSearchChange }) => {
	return (
		<div>
			<input
				onChange={onSearchChange}
				className="pa3 ba b--green bg-lightest-blue"
				type="search"
				placeholder="search robots"
				value={searchField}
			/>
		</div>
	);
};

export default SearchBox;
