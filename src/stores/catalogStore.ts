import {CatalogApi} from '../api';
import CatalogModel, {ICatalog} from '../models/catalog';
import BaseStore from './baseStore';
import RootStore from './rootStore';

class CatalogStore extends BaseStore {

  catalog: ICatalog;
  
  constructor(store: RootStore, private api: CatalogApi) {
    super(store);
  }

  fetch = () => {
    this.api.fetchCatalog()
      .then((data: any) => this.catalog = new CatalogModel(data));
  };
  
  reset = () => {return;}
  
}

export default CatalogStore;