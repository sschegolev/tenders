import * as React from 'react';
import {ICatalogItem} from '../../../../models/catalog';
import {Item, ItemTitle, SubItemTitle} from '../styles';

interface CatalogDropdownItemProps {
  item: ICatalogItem;
}

export const CatalogDropdownItem = ({
  item
}: CatalogDropdownItemProps) => {
  return (
    <Item>
      <ItemTitle>
        {item.title}
      </ItemTitle>
      {
        item.subItems.map(subItem => {
          return (
            <SubItemTitle
              key={subItem.id}
            >
              {subItem.title}
            </SubItemTitle>
          )
        })
      }
    </Item>
  )
}