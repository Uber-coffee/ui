import React from 'react';
import Admin from './Admin/Admin';
import {Route} from "react-router-dom";
import UserAndPermissions from "../UserAndPermissions/user-and-permissions";

const Loged = props => {
  return (
      <div>
        <Route exact path={"/"} render={Admin} />
        <Route path={"/users_and_permissions"} render={UserAndPermissions} />
      </div>
  );
};

export default Loged;
