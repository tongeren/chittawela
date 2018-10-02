import React, { Fragment, Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ROUTES } from '../Routes';
import NoMatch from '../../components/pages/NoMatch/NoMatch'; // 404 page

class ChittawelaRoutes extends Component {

    render() {
        return (
            <Fragment>
                <Switch>
                    { ROUTES.map((route, i) => (<Route key={i} exact {...route}  />)) }
                    <Route exact component={NoMatch} /> 
                </Switch>
            </Fragment>
        );
    }
}

export default ChittawelaRoutes;