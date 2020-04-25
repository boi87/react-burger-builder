import React from 'react';
import {Switch, Route} from "react-router-dom";

import Layout from "./components/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import CheckOut from "./containers/CheckOut/CheckOut";
import ContactData from "./containers/CheckOut/ContactData/ContactData";

function App() {
    return (
        <div>
            <Layout>
                <Switch>
                    <Route exact path={'/'} component={BurgerBuilder}/>
                    <Route  path={'/checkout'} component={CheckOut}/>
                    {/*<Route exact path={'/checkout/contact-data'} component={ContactData}/>*/}
                </Switch>
            </Layout>
        </div>
    );
}

export default App;
