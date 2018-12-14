import * as React from 'react';
import { SearchButton, SearchIcon, SearchInput, SearchInputWrapper, SearchWrapper } from './styles';

export const Search = () => (
  <SearchWrapper>
    <SearchInputWrapper>
      <SearchInput type='text' placeholder='Поиск товаров и услуг'/>
      <SearchIcon>
        <img src="assets/images/ic_search.png"/>
      </SearchIcon>
    </SearchInputWrapper>
    <SearchButton>
      Найти
    </SearchButton>
  </SearchWrapper>
)