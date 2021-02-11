import React from 'react';
import './App.css';
import {useEffect, useRef} from 'react';
import Input from './components/Input';

function App() {

    useEffect( () => {
        firstReference.current.focus();
    }, [])

    function secondFocus(e) {
      console.log("second focue")
        if(e.key === "Enter") {
            secondReference.current.focus();
        }
    }
    function btnFocus() {
        console.log("btnFocus ")
    }

    const firstReference = useRef(null);
    const secondReference = useRef(null);

  return (
    <div className="App">
      <header className="App-header">
          <div>

            <Input type="text" placeholder="First name" ref={firstReference} onKeyDown={secondFocus}/>
            <Input type="text" placeholder="Second name" ref={secondReference} onKeyDown={btnFocus}/>
            <button type="submit">Submit</button>
          </div>
      </header>
    </div>
  );
}

export default App;
