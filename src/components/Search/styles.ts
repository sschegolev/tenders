import styled from 'styled-components';

export const SearchWrapper = styled.div`
  display: flex;
`;

export const SearchInputWrapper = styled.div`
  position: relative;
`;

export const SearchInput = styled.input`
  padding-left: 47px;
  padding-right: 167px;
  height: 38px;
  width: 411px;
  border: 2px solid #dbdbdb;
  border-radius: 2px;
`;

export const SearchIcon = styled.div`
  opacity: .38;
  position: absolute;
  top: 15px;
  left: 19px;
`;

export const SearchButton = styled.div`
  background: #1581ed;
  margin-left: 8px;
  width: 88px;
  border-radius: 2px;
  text-transform: uppercase;
  font-size: 13px;
  letter-spacing: .4px;
  color: #fff;
  transition: .1s ease-out;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 43px;

  &: hover {
    cursor: pointer;
    background-color: #5ba7f3;
  }
`;