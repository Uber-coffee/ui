import React from 'react';
import Admin from './Admin/Admin';
import {Route} from "react-router-dom";
import UserAndPermissions from "../UserAndPermissions/user-and-permissions";
import RecipesPage from "../RecipesPage/RecipesPage";

const Loged = props => {
  return (
      <div>
        <Route exact path={"/"} render={Admin} />
        <Route path={"/users_and_permissions"} render={UserAndPermissions} />
        <Route path={"/recipes"} render={RecipesPage} />
      </div>
  );
};

export default Loged;
