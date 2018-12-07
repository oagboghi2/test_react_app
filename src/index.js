// Import the React abd ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { blue, white } from 'ansi-colors';

// Create a react component
// Special dialect of JS(it's not HTML)

//Browsers don't understand JSX. We write JSX then run tool to turn it into normal JS
// Very similar in form and function to HTML to HTML with a couple differences

function getButtonText(){
    return 'Click on me!'
}
const App = () => {
    const buttonText = {text: 'Click Me'};
    // Adding custom styling via dual brackets
    // Adding custom styling to an elemnt uses different syntax
    // Adding a class to an element uses different syntax
    // JSX can reference JS variables
    return (
        <div>    
            <label className="label" for="name"> Enter Name: </label>
            <input id="name" type="text" />
            <button style={{backgroundColor: 'blue', color: 'white'}}>{buttonText.text}</button>
        </div>
    )
}; 

// Take the react component and show it on the screen
ReactDOM.render(
    <App />, 
    document.querySelector('#root ')
);