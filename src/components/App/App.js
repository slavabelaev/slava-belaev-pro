import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import NotFoundPage from '../pages/NotFoundPage';

const App = () => (
    <Switch>
        <Route path="/" exact component={HomePage} />
        <Route component={NotFoundPage} />
    </Switch>
);

export default App;
