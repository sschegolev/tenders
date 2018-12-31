import { withRouter } from 'react-router';
import { connect } from '../../components/connect';
import { withBreadcrumbs } from '../../components/HOC/withBreadcrumbs';
import { TenderPage, TenderPageProps } from './TenderPage';

const ConnectedTenderPage = connect<TenderPageProps>(
  ({ breadcrumbsStore: { addBreadcrumb }, tenderStore: { fetchTender, tender } }) => ({
    addBreadcrumb,
    fetchTender,
    tender
  }),
  withRouter(withBreadcrumbs(TenderPage))
);

export { ConnectedTenderPage as TenderPage };
