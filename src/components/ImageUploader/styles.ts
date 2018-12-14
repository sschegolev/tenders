import styled from 'styled-components';

export const UploadImageContainer = styled.div`
  margin-left: 20px;
`;

export const UploadButton = styled.div`
  display: flex;
  margin-top: 11px;
  align-items: center;
`;

export const UploadLabel = styled.label`
  padding: 11px 20px;
  border-radius: 2px;
  color: #fff;
  display: inline-block;
  background: #a4b5c6;
  cursor: pointer;
  margin-right: 18px;
  transition: .2s;
  
  &:hover {
    background: #5ba7f3;
  }
  
  &:active {
    background: #0255a9;
  }
` as any;

export const UploadInput = styled.input`
  width: .1px;
  height: .1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
` as any;

export const UploadFileFormat = styled.div`
  font-size: 12px;
  margin-top: 8px;
  letter-spacing: .5px;
  color: #777;
`;