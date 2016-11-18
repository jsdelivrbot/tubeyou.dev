import _					from 'lodash'
import React, {Component} 	from 'react';
import ReactDOM 			from 'react-dom';
import SeachBar 			from './components/SearchBar';
import VideoList 			from './components/VideoList';
import VideoDetail 			from './components/VideoDetail';
import YTSearch 			from 'youtube-api-search';

const API_KEY = 'AIzaSyAJa8VAjmT3T8EQu3reuc2-ZzQfy3EN4Ko';


class App extends Component {
	
	constructor(props) {

		super(props);
		
		this.state = { 
			videos: [], 
			selectedVideo: null
		};

		this.videoSearch('unity tutorial series');
		
		
	}

	videoSearch(term){

		YTSearch({key: API_KEY, term: term}, (videos) => {

			this.setState({ 
				videos: videos,
			 	selectedVideo: videos[0]
			 });

		});
	}

	render() {

		const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);

			return <div>
			<SeachBar onVideoSearch={videoSearch}/>
			<VideoDetail video={this.state.selectedVideo} />
			<VideoList 
				onVideoSelect={selectedVideo => this.setState({selectedVideo})}
				videos={this.state.videos} 
				/>
			</div>;
		}
	
}

ReactDOM.render(<App />, document.querySelector('.container'));
