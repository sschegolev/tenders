import * as React from 'react';
import {ICatalog} from '../../../models/catalog';
import Popup from '../../Popup';
import {CatalogDropdownItem} from './CatalogDropdownItem/CatalogDropdownItem';
import {CatalogContainer} from './styles';

export interface CatalogDropdownProps {
  handleCloseCatalog: () => void;
  catalog: ICatalog;
}

export const CatalogDropdown = ({
  handleCloseCatalog,
  catalog
}: CatalogDropdownProps) => {

  const handleCatalogClick = () => {
    handleCloseCatalog();
  };

  return (
    <Popup
      closeChild={handleCatalogClick}
      styles={{
        position: 'absolute',
        padding: '15px',
        backgroundColor: '#fff',
        top: '40px',
        left: '0',
        zIndex: '9999'
      }}
    >
      <CatalogContainer>
        {
          catalog.items.map(item => {
            return (
              <CatalogDropdownItem
                key={item.id}
                item={item}
              />
            )
          })
        }
      </CatalogContainer>
    </Popup>
  );
};