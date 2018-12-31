import styled from 'styled-components';

export const ImageViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 468px;
`;

export const ImageView = styled.div`
  width: 100%;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  background-color: #fff;
  box-shadow: 0 0 17px rgba(0, 0, 0, 0.13);
  cursor: pointer;
`;

export const Image = styled.img`
  height: 100%;
`;

export const ImageCarouselContainer = styled.div`
  display: flex;
`;

export const ImagePreviewContainer = styled.div`
  width: 148px !important;
  margin-left: 12px !important;

  &:first-child {
    margin-left: 0 !important;
  }
`;
