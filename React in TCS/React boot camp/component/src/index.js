
// Import react dependencies- React, ReactDOM

import React from 'react'
import ReactDOM from 'react-dom'


// Create your component
const App = function() {
    const style = {backgroundColor: 'blue', color: 'white'}
    const a = 5;
    const b= 7;
    const btnText = a<b ? "Submit": "Cancel"
    return (
                <div>
                    <label className="label" >Enter</label>
                   <input id="name" type="text" />

                   <button style={style}>{btnText}</button>
               </div>
          )

}

//Transpilers --> Babel


// Display component

ReactDOM.render(<App /> , document.getElementById("root"))