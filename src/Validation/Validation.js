// Create a new component (=> ValidationComponent) which receives the text length as a prop.

import React from 'react';

// execute a constant assigned an ES6 function that will recieve some props
const validation = (props) => {

  // Return some JSX to make it a valid component
  //Turnary expression that checks inputLength character length if greater than 5 outputs "Text long enough". If not, outputs "Text too short"
   return (
      <div>
      {
        props.inputLength > 5 ?

        <p>Text long enough</p>:

        <p>Text too short</p>
      }

      </div>
   );
};

export default validation;
