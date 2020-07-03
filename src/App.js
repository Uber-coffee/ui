import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import {Route} from 'react-router-dom';
import LoginContainer from './components/Login/LoginContener/LoginContainer';
import ContentContainer from './components/Content/ContentContainer';
function App (props) {
  return (
    <div className="AppWrapper">
      <div className="Header">
        <Header />
      </div>
      <div className="Conten">
        <ContentContainer store={props.store} />
      </div>
      <div className="Footer">
        <Footer />
      </div>
      <Route
        path="/login"
        exact
        render={() => <LoginContainer store={props.store} />}
      />
    </div>
  );
}

export default App;
