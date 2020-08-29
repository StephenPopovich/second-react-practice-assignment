// Create a new component (=> ValidationComponent) which receives the text length as a prop.

import React from 'react';

// execute a constant assigned an ES6 function that will recieve some props
const validation = (props) => {

  // Return some JSX to make it a valid component
   return (
      <div>
         <p>Text too short</p>
      </div>
   );
};

export default vaildation;
