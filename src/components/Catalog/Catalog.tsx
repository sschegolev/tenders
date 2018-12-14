import * as React from 'react';
import {CatalogDropdown} from './CatalogDropdown';
import {CatalogPreview, CatalogTitle, CatalogWrapper} from './styles';

export interface CatalogProps {
  openCatalogDropdown: () => void;
  closeCatalogDropdown: () => void;
  isCatalogDropdownOpen: boolean;
}

export const Catalog = ({
  openCatalogDropdown,
  isCatalogDropdownOpen,
  closeCatalogDropdown
}: CatalogProps) => {

  const catalogClickHandler = () => openCatalogDropdown();

  return (
    <CatalogWrapper>
      <CatalogPreview onClick={catalogClickHandler}>
        <img src="../assets/images/ic_bars.png"/>
        <CatalogTitle>
          Каталог тендеров
        </CatalogTitle>
      </CatalogPreview>
      {
        isCatalogDropdownOpen && (
          <CatalogDropdown
            handleCloseCatalog={closeCatalogDropdown}
          />
        )
      }
    </CatalogWrapper>
  )
  
};
