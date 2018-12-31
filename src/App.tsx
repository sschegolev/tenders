import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  ROUTE_HOME_PAGE,
  ROUTE_INDIVIDUAL_REGISTRATION_PAGE,
  ROUTE_LEGAL_REGISTRATION_PAGE,
  ROUTE_LOGIN_PAGE
} from './constants/router-links';
import { AuctionPage } from './pages/AuctionPage';
import LoginPage from './pages/LoginPage/LoginPage';
import { IndividualRegistrationPage, LegalRegistrationPage } from './pages/RegistrationPages';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact={true} path={ROUTE_LOGIN_PAGE} component={LoginPage} />
          <Route
            exact={true}
            path={ROUTE_INDIVIDUAL_REGISTRATION_PAGE}
            component={IndividualRegistrationPage}
          />
          <Route
            exact={true}
            path={ROUTE_LEGAL_REGISTRATION_PAGE}
            component={LegalRegistrationPage}
          />
          <Route path={ROUTE_HOME_PAGE} component={AuctionPage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
