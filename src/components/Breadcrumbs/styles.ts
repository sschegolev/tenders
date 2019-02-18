import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const BreadcrumbsContainer = styled.div`
  width: 100%;
  min-height: 14px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  padding: 23px 0;
`;

export const Boilerplate = styled.div`
  color: #0080ff;
  padding: 3px 0;
`;

export const BreadcrumbLink = styled(Link)`
  color: #999;
  padding: 3px 0;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    color: #0080ff;
  }
`;

export const BreadcrumbSeparator = styled.img`
  margin: 0 16px;
`;
