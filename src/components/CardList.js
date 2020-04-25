import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
	const renderCards = () => {
		return robots.map((robot) => {
			return <Card robot={robot} key={robot.id} />;
		});
	};

	return <div>{renderCards()}</div>;
};

export default CardList;
