import * as React from 'react';
import {Route, Switch} from 'react-router-dom';
import {
  ROUTE_ABOUT,
  ROUTE_BLOG,
  ROUTE_FUTURE_TENDERS,
  ROUTE_GROUP_TENDERS,
  ROUTE_HOW_TO_CREATE_TENDER,
  ROUTE_PRODUCTS,
  ROUTE_RATINGS,
  ROUTE_TENDER_ARCHIVE
} from 'src/constants/router-links';

import About from '../../components/About';
import Blog from '../../components/Blog';
import GroupTenders from '../../components/GroupTenders';
import HowCreateTenders from '../../components/HowCreateTenders';
import Ratings from '../../components/Ratings';
import {ProductPage} from '../ProductPage/ProductPage';
import {TendersPage} from '../TendersPage';
import {MainPage, MainPageContent} from './styles';

const Main = () => {
  return (
    <MainPage>
      <MainPageContent>
        <Switch>
          <Route exact={true} path={ROUTE_FUTURE_TENDERS} component={TendersPage} />
          <Route exact={true} path={ROUTE_GROUP_TENDERS} component={GroupTenders} />
          <Route exact={true} path={ROUTE_HOW_TO_CREATE_TENDER} component={HowCreateTenders} />
          <Route exact={true} path={ROUTE_BLOG} component={Blog} />
          <Route exact={true} path={ROUTE_ABOUT} component={About} />
          <Route exact={true} path={ROUTE_TENDER_ARCHIVE} component={Ratings} />
          <Route exact={true} path={ROUTE_RATINGS} component={Ratings} />
          <Route path={`${ROUTE_PRODUCTS}/:id`} component={ProductPage}/>
        </Switch>
      </MainPageContent>
    </MainPage>
  )
};

export default Main;