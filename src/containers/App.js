import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import { connect } from 'react-redux';
import { setSearchField, fetchRobots } from '../actions';
import '../containers/App.css';

class App extends React.Component {
	componentDidMount() {
		this.props.fetchRobots();
	}

	onSearchChange = (event) => {
		this.props.setSearchField(event.target.value);
	};

	render() {
		const { robots, searchField } = this.props;
		console.log(this.props);
		const filteredRobots = robots.filter((robot) => robot.name.toLowerCase().includes(searchField.toLowerCase()));

		return !robots.length ? (
			<h1>Loading...</h1>
		) : (
			<div className="tc">
				<h1 className="f1">RoboFriends</h1>
				<SearchBox searchChange={this.onSearchChange} searchField={searchField} />
				<Scroll>
					<ErrorBoundary>
						<CardList robots={filteredRobots} />
					</ErrorBoundary>
				</Scroll>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		searchField: state.search.searchField,
		robots: state.robotHash.robots
	};
};

export default connect(mapStateToProps, { setSearchField, fetchRobots })(App);
