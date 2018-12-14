import styled from 'styled-components';

export const StyledPopup = styled.div`
  position: absolute;
  width: intrinsic;           /* Safari/WebKit uses a non-standard name */
  width: -moz-max-content;    /* Firefox/Gecko */
  width: -webkit-max-content; /* Chrome */
  top: 15px;
  right: 0px;
  border: 1px solid #f5f6f7;
  box-shadow: 0px 6px 14px -1px rgba(168,163,168,1);
  background-color: #fff;
`;