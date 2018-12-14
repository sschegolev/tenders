import {connect} from '../../connect';
import {CatalogDropdown, CatalogDropdownProps} from './CatalogDropdown';

const ConnectedCatalogDropdown = connect<CatalogDropdownProps>(
  ({
    catalogStore: { catalog }
  }) => ({
    catalog
  }),
  CatalogDropdown
);

export { ConnectedCatalogDropdown as CatalogDropdown };