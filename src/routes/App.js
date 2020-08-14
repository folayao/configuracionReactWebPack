import React from 'react';
/* Componentes Containers*/
import Home from '../container/PrincipalPage'

/* Layout */
import Layout from '../components/Layout'
/* STYLES */
import '../assets/styles/App.scss'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home} />
                </Switch>
            </Layout>
        </BrowserRouter>
    )
}

export default App;