import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const LoginBlock = styled.div`
  position: relative;
  display: flex;
`;

export const LoginButton = styled(Link)`
  font-weight: 400;
  font-size: 14px;
  color: gray;
  text-decoration: none;
`;

export const RegistrationButton = styled.div`
  font-weight: 400;
  font-size: 14px;
  color: gray;
  text-decoration: none;

  &:hover {
    cursor: pointer;
  }
`;

export const Separator = styled.span`
  font-weight: 400;
  font-size: 14px;
  color: gray;
  text-decoration: none;
  margin: 0 5px;
`;