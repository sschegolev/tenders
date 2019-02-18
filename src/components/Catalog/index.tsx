import {connect} from '../connect';
import {Catalog, CatalogProps} from './Catalog';

const ConnectedCatalog = connect<CatalogProps>(
  ({
    dropdownStore: {setCatalogDropdownOpen, isCatalogDropdownOpen}
  }) => ({
    openCatalogDropdown: () => setCatalogDropdownOpen(true),
    closeCatalogDropdown: () => setCatalogDropdownOpen(false),
    isCatalogDropdownOpen
  }),
  Catalog
);

export {ConnectedCatalog as Catalog};