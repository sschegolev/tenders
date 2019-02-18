export interface ICatalogSubItem {
  id: string;
  title: string;
}

export interface ICatalogItem {
  id: string;
  title: string;
  subItems: ICatalogSubItem[];
}

export interface ICatalog {
  items: ICatalogItem[];
}

class CatalogModel implements ICatalog{
  items: ICatalogItem[];

  constructor(catalog: Partial<CatalogModel>) {
    Object.assign(this, catalog);
  }
}

export default CatalogModel;
