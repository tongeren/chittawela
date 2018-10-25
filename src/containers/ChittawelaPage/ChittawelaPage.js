import React, { Fragment } from 'react';
import { Switch } from 'react-router-dom';
import ChittawelaRoutes from '../../routes/ChittawelaRoutes/ChittawelaRoutes';
import Layout from '../../hoc/Layout/Layout';
// import Music from '../../components/UI/Music/Music';


const chittawelaPage = () => (
    <Fragment>
        {/* <Music /> */}
        <Layout />
        <Switch>
            <ChittawelaRoutes />
        </Switch> 
    </Fragment>
);

export default chittawelaPage;
