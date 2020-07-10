import React from 'react';
import {Redirect, Route} from "react-router-dom";
import UserAndPermissions from "../UserAndPermissions/user-and-permissions";
import RecipesPage from "../RecipesPage/RecipesPage";
import AdminPage from "./Admin/AdminPage";

const Loged = props => {
  return (
      <div>
        <Route exact path={"/"}>
            <Redirect to="/control_panel"/>
        </Route>
        <Route path={"/users_and_permissions"} render={UserAndPermissions} />
        <Route path={"/recipes"} render={RecipesPage} />
        <Route path={"/control_panel"} render={AdminPage} />
      </div>
  );
};

export default Loged;
