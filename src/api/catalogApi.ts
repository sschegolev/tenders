import {Catalog} from '../constants/tenders-catalog';

export interface CatalogApi {
  fetchCatalog: () => Promise<any>;
}

// tslint:disable-next-line:max-classes-per-file
export class MockCatalogApi implements CatalogApi {
  fetchCatalog = () => Promise.resolve<any>(Catalog);
}