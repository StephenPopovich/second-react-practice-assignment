import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';

// Assignment Instructions:
// 1. Create an input field (in App component) with a change listener which outputs the length of the entered text below (e.g. in a pargraph).
// 2. Create a new component (=> ValidationComponent) which receives the text length as a prop
// 3. Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)
// 4. Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black)
// 5. Render a list of CharComponent where each CharComponent receives a different letter of the entered text (in the initial input fild) as a prop.
// 6. When you click a CharComponent, it should be removed from the enetered text.
//Hint: Keep in mind that JavaScript strings are basically arrays!


// *** LAST LEFT ON TIME STAMP , # ****

class App extends Component {
  // state property
  //userInput array is just some text but its an array of strings
   state = {
      userInput: ''
   }

  // a method to change input data passing an event object and stored in state

   inputChangeHandler = (event) => {
     this.setState({userInput: event.target.value});
   }


  render() {
  // a constant variable that reaches out to the state of the userInput that maps every elemenet of this array into a new element
 // map() doesnt touch the original array it simply gives you a new array that stored in charList
 // String are bascially JavaScript arrays but not really to turn them into arrays call split() on this will basically slips them in array of strings after every every character
  const charList = this.state.userInput.split('').map((char, index) => {
    return <Char character={char} key={index} />;
  });


    return (
      <div className="App">
            <h1 className="App-header"><u>Second React Practice Assignment Instructions:</u></h1>
              <ol className="Assignment-instructions">
                <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below (e.g. in a pargraph).</li>
                <li>Create a new component (=> ValidationComponent) which receives the text length as a prop.</li>
                <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length).</li>
                <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
                <li>Render a list of CharComponent where each CharComponent receives a different eltter of the entereed test (in the initial input fild) as a prop.</li>
                <li>When you click a CharComponent, it should be removed from the enetered text.</li>
                <p><i>Hint: Keep in mind that JavaScript strings are basically arrays!</i></p>
              </ol>

            <hr />



        <p><i>Input field in App component with a change listener with two way binding, which outputs the length of the entered text below :</i></p>
        <input type="text"
          onChange={this.inputChangeHandler}
          value={this.state.userInput}/>
        <p>{this.state.userInput}</p>

        <p><i>Pass validation component as a self closing tag and passing the text length as a prop.</i></p>
        <Validation inputLength={this.state.userInput.length}/>
        <p><i>Pass another component (=> CharComponent) and style it as an inline box:</i></p>
         {charList}


      </div>
    );
  }
}

export default App;
