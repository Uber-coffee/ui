import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import {Route} from 'react-router-dom';
import Login from './components/Login/Login';
function App () {
  return (
    <div className="AppWrapper">
      <div className="Header">
        <Header />
      </div>
      <div className="Conten">
        <Content />
      </div>
      <div className="Footer">
        <Footer />
      </div>
      <Route path="/login" render={() => <Login />} />
    </div>
  );
}

export default App;
