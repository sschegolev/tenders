import { observable } from 'mobx';
import BaseStore from './baseStore';
import RootStore from './rootStore';

export interface IBreadcrumb {
  name: string;
  path: string;
}

class BreadcrumbsStore extends BaseStore {
  @observable breadcrumbs: IBreadcrumb[] = [];

  constructor(store: RootStore) {
    super(store);
  }

  setupBreadcrumbs = (breadcrumbs: IBreadcrumb[]) => (this.breadcrumbs = [...breadcrumbs]);

  addBreadcrumb = (breadcrumb: IBreadcrumb) =>
    (this.breadcrumbs = [...this.breadcrumbs, ...[breadcrumb]]);

  reset = () => {
    this.breadcrumbs = [];
  };
}

export default BreadcrumbsStore;
