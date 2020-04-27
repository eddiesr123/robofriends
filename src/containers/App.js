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

	render() {
		const { robots, searchField, isPending, onSearchChange } = this.props;
		const filteredRobots = robots.filter((robot) => robot.name.toLowerCase().includes(searchField.toLowerCase()));

		return isPending ? (
			<h1>Loading...</h1>
		) : (
			<div className="tc">
				<h1 className="f1">RoboFriends</h1>
				<SearchBox onSearchChange={onSearchChange} searchField={searchField} />
				<Scroll>
					<ErrorBoundary>
						<CardList robots={filteredRobots} />
					</ErrorBoundary>
				</Scroll>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	searchField: state.search.searchField,
	robots: state.requestRobots.robots,
	isPending: state.requestRobots.isPending
});

const mapDispatchToProps = (dispatch) => ({
	onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
	fetchRobots: () => dispatch(fetchRobots())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
