import React, {Component} from 'react';

class SearchBar extends Component {

	constructor(props) {
		super(props);

		this.state = { term: ''};
	}

	

	render() {
		return (
			<div className="search-bar">
				<input className="form-control" placeholder="Search for videos"
				value = {this.state.term}
				onChange = { event => this.onInputChange(event.target.value) }
				// onClick = {event => this.setState({ term: '' })}
				/>
			</div>
			);
	}

	onInputChange(term){
		this.setState({ term });
		this.props.onVideoSearch(this.state.term);
	}

}

export default SearchBar;