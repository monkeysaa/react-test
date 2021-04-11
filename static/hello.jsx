"use strict";

console.log("hello"); // This confirms that this page ran.

// This tells React what to do with certain elements 
// This is the equiv. of creating a function -- but not calling it
// createElement takes two arguments: 
//    an h1 header and a second arg attributes (we don't want any, so null)
function Hello(props) {
    return <h1>Hello world (from React + jsx)</h1>;
    // return React.createElement('h1', null, 'Hello world (from React)');
}

ReactDOM.render(
    <Hello />, // create a special Hello thing (A Component!)
    document.getElementById("react-go") // put it here
);