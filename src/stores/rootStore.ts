import { AuthStore, BaseStore, CatalogStore, DropdownStore, ModalStore, TendersStore, UserStore } from '.';
import {CatalogApi, TendersApi} from '../api';

class RootStore {

  protected authStore: AuthStore;
  protected userStore: UserStore;
  protected modalStore: ModalStore;
  protected dropdownStore: DropdownStore;
  protected tendersStore: TendersStore;
  protected catalogStore: CatalogStore;
  
  private readonly stores = new Set<BaseStore>();

  constructor() {
    this.authStore = new AuthStore(this);
    this.userStore = new UserStore(this);
    this.modalStore = new ModalStore(this);
    this.dropdownStore = new DropdownStore(this);
    this.tendersStore = new TendersStore(this, new TendersApi());
    this.catalogStore = new CatalogStore(this, new CatalogApi());
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