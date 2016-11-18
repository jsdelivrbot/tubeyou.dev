import React from 'react';
import ReactDOM from 'react-dom';

import SeachBar from './components/SearchBar';

const API_KEY = 'AIzaSyAJa8VAjmT3T8EQu3reuc2-ZzQfy3EN4Ko';

const App = () => {
	return <div>
	<SeachBar />
	</div>;
}

ReactDOM.render(<App />, document.querySelector('.container'));
