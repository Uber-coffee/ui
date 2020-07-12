import React from 'react';
import './App.css';

import Footer from './components/Footer/Footer';

import {Route} from 'react-router-dom';

import LoginContainer from './components/Login/LoginContener/LoginContainer';
import ContentContainer from './components/Content/ContentContainer';
import HeaderContainer from "./components/Header/HeaderContainer";

function App(props) {
    return (
        <div>
            <Route
                path="/login"
                exact
                render={() => <LoginContainer store={props.store}/>}
            />
            <div className="Header">
                <HeaderContainer store={props.store}/>
            </div>
            <div className="Conten">
                <ContentContainer store={props.store}/>
            </div>
            <div className="Footer">
                <Footer/>
            </div>
        </div>
    );
}

export default App;
