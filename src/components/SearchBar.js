import React, {Component} from 'react';

class SearchBar extends Component {

	constructor(props) {
		super(props);

		this.state = { term: 'Type something to search'};
	}

	render() {
		return (
			<div>
				<input 
				value = {this.state.term}
				onChange = {event => this.setState({ term: event.target.value })}
				// onClick = {event => this.setState({ term: '' })}
				/>
			</div>
			);
	}

}

export default SearchBar;