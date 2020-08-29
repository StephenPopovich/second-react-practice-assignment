// Create a new component (=> ValidationComponent) which receives the text length as a prop.

import React from 'react';

// execute a constant assigned an ES6 function that will recieve some props
const validation = (props) => {
  // new varilable
  let validationMessage ='Text long enough';

  if (props.inputLength <= 5) {
    validationMessage = 'Text too short';
  }

  // Return some JSX to make it a valid component

   return (
      <div>

       <p>{validationMessage}</p>
     </div>
//Turnary expression that checks inputLength character length if greater than 5 outputs "Text long enough". If not, outputs "Text too short"
      // Older adn simplier option turnary expression option
      // {
      //   props.inputLength > 5 ?
      //
      //   <p>Text long enough</p>:
      //
      //   <p>Text too short</p>
      // }


   );
};

export default validation;
