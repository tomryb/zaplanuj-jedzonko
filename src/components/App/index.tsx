import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { useAppHook } from 'components/App/hook';

import Header from 'components/Header';
import Sidebar from 'components/Sidebar';
// import Footer from 'components/Footer';

import Desktop from 'components/Content/Desktop';
import Recipes from 'components/Content/Recipes/RecipeList';
import Plans from 'components/Content/Plans';

import './styles.scss';

const App: React.FC = () => {

  const {
    isLoading,
    isSuccess,
    isFailure
  } = useAppHook();

  return (
    <div className="App">
      {isLoading && renderLoading()}
      {isSuccess && renderSuccessMessage()}
      {isFailure && renderFailureMessage()}
    </div>
  );
};

const renderLoading = () => {
  return (
    <span className="App__loader">{'Loading kurde bele...'}</span>
  );
};

const renderSuccessMessage = () => {
  return (
    <div className="HolyGrail">
      <Header />
      <div className="HolyGrail-body">
        <Switch>
          <Route exact path="/">
            <Desktop />
          </Route>
          <Route exact path="/desktop">
            <Desktop />
          </Route>
          <Route exact path="/recipes">
            <Recipes />
          </Route>
          <Route exact path="/plans">
            <Plans />
          </Route>
          {/* <Route exact path="/contact">
            <Contact />
          </Route> */}
        </Switch>
        <Sidebar />
      </div>
      {/* <Footer /> */}
    </div>
  );
};

const renderFailureMessage = () => {
  return (
    <span className="App__failure">{'Cos sie zepsuo'}</span>
  );
};

export default App;