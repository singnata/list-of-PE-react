import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ListEntrepreneurs from './ListEntrepreneurs';
import DetailsEntrepreneur from './DetailsEntrepreneur';
import EditEntrepreneur from './EditEntrepreneur';
import NewEntrepreneur from './NewEntrepreneur';
import NotFound from './NotFound';
import React from 'react';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={ListEntrepreneurs} />
      <Route path="/detail/:id" component={DetailsEntrepreneur} />
      <Route path="/edit/:id" component={EditEntrepreneur} />
      <Route path="/new" component={NewEntrepreneur} />
      <Route path="*" component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
