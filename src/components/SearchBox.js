import React from 'react';

const SearchBox = ({ searchField, searchChange }) => {
	return (
		<div>
			<input
				onChange={searchChange}
				className="pa3 ba b--green bg-lightest-blue"
				type="search"
				placeholder="search robots"
				value={searchField}
			/>
		</div>
	);
};

export default SearchBox;
