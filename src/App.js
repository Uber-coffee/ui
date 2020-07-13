import React from 'react';
import './App.css';

import Footer from './components/Footer/Footer';

import {Route} from 'react-router-dom';

import LoginContainer from './components/Login/LoginContener/login-container';
import ContentContainer from './components/Content/content-container';
import HeaderContainer from "./components/Header/header-container";

function App(props) {
    return (
        <div className={"wrapper"}>
            <Route
                path="/login"
                exact
                render={() => <LoginContainer store={props.store}/>}
            />
            <div className="Header">
                <HeaderContainer store={props.store}/>
            </div>
            <div className="Content">
                <ContentContainer store={props.store}/>
            </div>
            <div className="Footer">
                <Footer/>
            </div>
        </div>
    );
}

export default App;
