import React, { Fragment } from 'react';
import { Switch } from 'react-router-dom';
import ChittawelaRoutes from '../../routes/ChittawelaRoutes/ChittawelaRoutes';
import Layout from '../../hoc/Layout/Layout';
    
const chittawelaPage = () => (
    <Fragment>
        <Layout />
        <Switch>
            <ChittawelaRoutes />
        </Switch>
    </Fragment>
);

export default chittawelaPage;
