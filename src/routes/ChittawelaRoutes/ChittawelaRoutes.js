import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ROUTES } from '../Routes';
import NoMatch from '../../components/pages/NoMatch/NoMatch'; // 404 page

const chittawelaRoutes = () => (
    <Switch>
        { ROUTES.map((route, i) => (<Route key={i} exact {...route}  />)) }
        <Route exact component={NoMatch} /> 
    </Switch>
);

export default chittawelaRoutes;