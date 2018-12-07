// Import the React abd ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { blue, white } from 'ansi-colors';

// Create a react component
// Special dialect of JS(it's not HTML)

//Browsers don't understand JSX. We write JSX then run tool to turn it into normal JS
// Very similar in form and function to HTML to HTML with a couple differences
const App = () => {
    //Adding custom styling via dual brackets
    return (
        <div>    
            <label className="label" for="name"> Enter Name: </label>
            <input id="name" type="text" />
            <button style={{backgroundColor: blue, color: white}}>Submit</button>
        </div>
    )
}; 

// Take the react component and show it on the screen
ReactDOM.render(
    <App />, 
    document.querySelector('#root ')
);