import React, { Fragment } from 'react';
import ChittawelaRoutes from '../../routes/ChittawelaRoutes/ChittawelaRoutes';
import Layout from '../../hoc/Layout/Layout';
// import Music from '../../components/UI/Music/Music';

const chittawelaPage = () => (
    <Fragment>
        {/* <Music /> */}
        <Layout>
            <ChittawelaRoutes />
        </Layout>  
    </Fragment>
);

export default chittawelaPage;
