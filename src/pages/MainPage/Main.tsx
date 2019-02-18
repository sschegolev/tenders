import * as React from 'react';
import { Route, RouteComponentProps, Switch } from 'react-router-dom';
import {
  ROUTE_ABOUT,
  ROUTE_BLOG,
  ROUTE_GROUP_TENDERS,
  ROUTE_HOME_PAGE,
  ROUTE_HOW_TO_CREATE_TENDER,
  ROUTE_RATINGS,
  ROUTE_TENDER,
  ROUTE_TENDER_ARCHIVE
} from 'src/constants/router-links';

import About from '../../components/About';
import Blog from '../../components/Blog';
import GroupTenders from '../../components/GroupTenders';
import HowCreateTenders from '../../components/HowCreateTenders';
import Ratings from '../../components/Ratings';
import { IBreadcrumb } from '../../stores/breadcrumbsStore';
import { getBreadcrumbs } from '../../utils/breadcrumbs-helper';
import {TenderPage} from '../TenderPage';
import {TendersPage} from '../TendersPage';
import {MainPage, MainPageContent} from './styles';

export interface MainPageProps {
  setupBreadcrumbs: (breadcrumbs: IBreadcrumb[]) => void;
}
// tslint:disable:no-console

class Main extends React.Component<MainPageProps & RouteComponentProps> {
  componentDidMount() {
    this.props.setupBreadcrumbs(getBreadcrumbs());
  }

  componentWillUpdate(nextProps: Readonly<RouteComponentProps>) {
    if (nextProps.location.pathname === ROUTE_HOME_PAGE) {
      this.props.setupBreadcrumbs([]);
    } else {
      this.props.setupBreadcrumbs(getBreadcrumbs());
    }
  }

  render() {
    return (
      <MainPage>
        <MainPageContent>
          <Switch>
            <Route exact={true} path={ROUTE_HOME_PAGE} component={TendersPage}/>
            <Route exact={true} path={ROUTE_GROUP_TENDERS} component={GroupTenders}/>
            <Route exact={true} path={ROUTE_HOW_TO_CREATE_TENDER} component={HowCreateTenders}/>
            <Route exact={true} path={ROUTE_BLOG} component={Blog}/>
            <Route exact={true} path={ROUTE_ABOUT} component={About}/>
            <Route exact={true} path={ROUTE_TENDER_ARCHIVE} component={Ratings}/>
            <Route exact={true} path={ROUTE_RATINGS} component={Ratings}/>
            <Route path={`${ROUTE_TENDER}/:id`} component={TenderPage}/>
          </Switch>
        </MainPageContent>
      </MainPage>
    )
  }
}

export default Main;
