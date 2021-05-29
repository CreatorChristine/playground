// import react and reactdom libraries
import React from 'react';
import ReactDOM from 'react-dom';

// point to show that functions can be called in JSX to print
// function getButtonText() {
//     return 'Click me';
// }

// create a react component
const App = () => {
    const button = { text: 'Click Here!' }; //using objects for jsx print
    const labelText = 'Enter Name: '; // variables can be called in JSX to print

    return (
        <div>
            <label className="label" htmlFor="name">
                {/* calling the variable to print in JSX */}
                {labelText}
            </label>
            <input id="name" type="text" />
            <button style={{
                backgroundColor: 'blue',
                color: 'white',
                border: '1px solid blue',
                borderRadius: '2px'
                }}>
                    {/* how to fix object not a react child when printing in JSX */}
                    {button.text}
                    {/* calling the function to print in JSX*/}
                    {/* {getButtonText()} */}
            </button>
        </div>
    );
};

// take react component and show it on the screen
ReactDOM.render( <App /> , document.getElementById('root'));


// if (module.hot) {
//     module.hot.accept();
// }