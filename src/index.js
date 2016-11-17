import React from 'react';
import ReactDOM from 'react-dom';

const API_KEY = 'AIzaSyAJa8VAjmT3T8EQu3reuc2-ZzQfy3EN4Ko';

// Create a new component
// Should produce some html

const Button = () => {
	return <div>Snippet</div>;
}

//Get the element's generated HTML
//We need to plug it into the DOM

ReactDOM.render(<Button />, document.querySelector('.container'));
