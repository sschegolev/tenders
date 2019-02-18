import styled from 'styled-components';

const Arrow = styled.div`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  box-shadow: 0 1px 5px rgba(0,0,0,.13);
  box-shadow: 0 1px 5px rgba(65,107,150,.38);
  
  &:hover {
    cursor: pointer;
  }
`;

export const NextArrowComponent = styled(Arrow)`
  top: -45px;
  right: 0px;
`;
export const PrevArrowComponent = styled(Arrow)`
  top: -45px;
  right: 54px;
  
  img {
    transform: rotate(180deg);
  }
`;