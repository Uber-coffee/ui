import React from 'react';
import './App.css';
import Content from './components/Content/Content';
import {Route} from 'react-router-dom';
import Login from './components/Login/Login';
function App () {
  return (
    <div className="AppWrapper">
      <div className="Conten">
        <Content />
      </div>
      <Route path="/login" render={() => <Login />} />
    </div>
  );
}

export default App;
