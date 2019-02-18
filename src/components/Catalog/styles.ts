import styled from 'styled-components';

export const CatalogWrapper = styled.div`
  position: relative;
`;

export const CatalogPreview = styled.div`
  display: flex;
  padding: 15px;
  
  &:hover {
    cursor: pointer;
    background-color: #f4f4f4;
  }
`;

export const CatalogTitle = styled.div`
  margin-left: 12px;
  font-weight: 400;
  color: #5e5e5e;
`;