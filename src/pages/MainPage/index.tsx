import { withRouter } from 'react-router';
import { connect } from '../../components/connect';
import Main, { MainPageProps } from './Main';

const ConnectedMainPage = connect<MainPageProps>(
  ({ breadcrumbsStore: { setupBreadcrumbs } }) => ({
    setupBreadcrumbs
  }),
  Main
);

export const MainPage = withRouter(ConnectedMainPage);
