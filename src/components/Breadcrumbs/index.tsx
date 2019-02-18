import { connect } from '../connect';
import { Breadcrumbs, BreadcrumbsProps } from './Breadcrumbs';

const ConnectedBreadcrumbs = connect<BreadcrumbsProps>(
  ({ breadcrumbsStore: { breadcrumbs } }) => ({
    breadcrumbs
  }),
  Breadcrumbs
);

export { ConnectedBreadcrumbs as Breadcrumbs };
