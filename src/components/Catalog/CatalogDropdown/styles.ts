import styled from 'styled-components';

export const CatalogContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
`;

export const Item = styled.div`
  margin-right: 20px;
  margin-bottom: 12px;
  width: 250px;
`;

export const ItemTitle = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const SubItemTitle = styled.div`
  color: #777;
  
  &:hover {
    cursor: pointer;
    text-decoration: underline;
    color: blue;
  }
`;