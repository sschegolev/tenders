import {rem} from 'polished';
import styled from 'styled-components';

export const Modal = styled.div`
  position: absolute;
  padding: ${rem(20)} ${rem(25)};
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  border-radius: 12px;
  border: solid 1px rgba(0, 0, 0, 0.2);
  z-index: 30;
  background-color: #fff;
`;