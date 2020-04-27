import React from 'react';
import {Switch, Route} from "react-router-dom";

import Layout from "./components/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import CheckOut from "./containers/CheckOut/CheckOut";
import Orders from "./containers/Orders/Orders";

function App() {
    return (
        <div>
            <Layout>
                <Switch>
                    <Route exact path={'/'} component={BurgerBuilder}/>
                    <Route path={'/checkout'} component={CheckOut}/>
                    <Route path={'/orders'} component={Orders}/>
                </Switch>
            </Layout>
        </div>
    );
}

export default App;
