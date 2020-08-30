import React from 'react';
// Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black)
// constant and function here
const char = (props) => {
  // Add styling of your choice to your elements in the components - with inline styles
  const style = {
    display: 'inline-block',
    padding: '16px',
    textAlign: 'center',
    margin: '16px',
    border: '1px solid black'
  };


// function of the component returning an input element
// Pass the event-handler method reference to the UserInput component and bind it to the input-change event
  return (
  <div
    style={style} onClick={props.clicked}>
    {props.character}
  </div>
  );
};

export default char;
