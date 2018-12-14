import styled from 'styled-components';

export const RouterLink = styled.div`
  display: flex;
  font-weight: bold;
  font-size: 12px;
`;

export const StyledLink = styled.a.attrs({
  style: (props: any) => ({
    borderBottom: `2px solid ${props.isActive ? '#fcd24c' : 'transparent'}`
  })
})`
  color: black;
  margin: 0.5em 1em;
  font-family: Helvetica, Arial, sans-serif;
  text-decoration: none;
  display: flex;
  align-items: center;
  border-bottom: 2px solid transparent;

  &:hover,
  &.active {
    border-bottom: 2px solid #fcd24c;
  }

  &:hover {
    cursor: pointer;
  }
` as any;