import React from 'react';
import {Redirect, Route} from "react-router-dom";
import UserAndPermissionsPage from "./UserAndPermissionsPage/user-and-permissions-page";
import RecipesPage from "./RecipesPage/recipes-page";
import AdminPage from "./AdminPage/admin-page";
import ComponentsPage from "./ComponentsPage/components-page";
import TradePointsPage from "./TradePointsPage/trade-points-page";

const Authorized = props => {
  return (
      <div>
        <Route exact path={"/"}>
            <Redirect to="/control_panel"/>
        </Route>
        <Route path={"/users_and_permissions"} render={UserAndPermissionsPage} />
        <Route path={"/recipes"} render={RecipesPage} />
        <Route path={"/control_panel"} render={AdminPage} />
        <Route path={"/components"} render={ComponentsPage} />
        <Route path={"/trade_points"} render={TradePointsPage} />
      </div>
  );
};

export default Authorized;
