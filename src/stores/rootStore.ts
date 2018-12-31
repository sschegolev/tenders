import {
  AuthStore,
  BaseStore,
  BreadcrumbsStore,
  CatalogStore,
  DropdownStore,
  ModalStore,
  TendersStore,
  UserStore
} from '.';
import { CatalogApi, TenderApi, TendersApi } from '../api';
import TenderStore from './tenderStore';

class RootStore {
  authStore: AuthStore;
  userStore: UserStore;
  modalStore: ModalStore;
  dropdownStore: DropdownStore;
  tendersStore: TendersStore;
  catalogStore: CatalogStore;
  breadcrumbsStore: BreadcrumbsStore;
  tenderStore: TenderStore;

  private readonly stores = new Set<BaseStore>();

  constructor() {
    this.authStore = new AuthStore(this);
    this.userStore = new UserStore(this);
    this.modalStore = new ModalStore(this);
    this.dropdownStore = new DropdownStore(this);
    this.tendersStore = new TendersStore(this, new TendersApi());
    this.catalogStore = new CatalogStore(this, new CatalogApi());
    this.breadcrumbsStore = new BreadcrumbsStore(this);
    this.tenderStore = new TenderStore(this, new TenderApi());
  }

  start = () => {
    this.catalogStore.fetch();
  };

  registerStore = (store: BaseStore) => this.stores.add(store);

  reset = () => {
    Array.from(this.stores).forEach(s => s.reset && s.reset());
  };
}

export default RootStore;
