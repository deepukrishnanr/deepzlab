import React from 'react';
import logo from './logo.svg';
import './App.css';
function App() {
    var timeIndia = new Date().toLocaleString("en-US", {timeZone: "Asia/Kolkata"})
    var timeUsa = new Date().toLocaleString("en-US", {timeZone: "America/New_York"});
    var timeAsia = new Date().toLocaleString("en-US", {timeZone: "Asia/Shanghai"});
    var timeAustralia = new Date().toLocaleString("en-US", {timeZone: "Australia/Brisbane"});
  return (
    <div className="App container" id="root">
      <div class="main-content">
          <div className="jumbotron">
              <h1 className="display-4">Time </h1>
              <div id="time">
                  <div className="card">
                      <h1>India</h1>
                      <h2>It is <span>{timeIndia}</span></h2>
                  </div>
                  <div className="card">
                      <h1>USA</h1>
                      <h2>It is <span>{timeUsa}</span></h2>
                  </div>
                  <div className="card">
                      <h1>Asia</h1>
                      <h2>It is <span>{timeAsia}</span></h2>
                  </div>
                  <div className="card">
                      <h1>Australia</h1>
                      <h2>It is <span>{timeAustralia}</span></h2>
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
}

export default App;
