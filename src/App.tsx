import React from 'react';
import './App.css';
import QRCode from 'qrcode.react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import pitcure from './component/pitcure';

function App() {
  return (
    <div className="App">
      <Router>
        <QRCode value={<Link to='/pitcure'/>} size={240} />
        <Route exact path="/pitcure" component={pitcure}/>
      </Router>
    </div>
  );
}

export default App;
