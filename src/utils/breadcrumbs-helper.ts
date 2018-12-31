import { ROUTE_HOME_PAGE } from '../constants/router-links';
import { IBreadcrumb } from '../stores/breadcrumbsStore';

const DEFAULT_MAIN_BREADCRUMP: IBreadcrumb = {
  name: 'Главная',
  path: ROUTE_HOME_PAGE
};

export const getBreadcrumbs = (): IBreadcrumb[] => {
  return [DEFAULT_MAIN_BREADCRUMP];
};
