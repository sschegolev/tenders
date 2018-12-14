import styled from 'styled-components';

export const Card = styled.div`
  width: 214px;
  height: 376px;
  background: #fff;
  box-shadow: 0 0 15px rgba(0,0,0,.13);
  cursor: pointer;
  
  &:hover {
    box-shadow: 0 0 15px rgba(65,107,150,.38);
  }
`;

export const CardImageBlock = styled.div`
  width: 100%;
  height: 224px;
  position: relative;
  width: 100%;
`;

export const CardImage = styled.div`
  width: 100%;  
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  
  img {
    max-height: 200px;
    max-width: 200px;
  }
`;

export const CardInfoContainer = styled.div`
  padding: 15px;
  letter-spacing: 0;
`;

export const CardDescription = styled.div`
  height: 28px;
  overflow: hidden;
  font-size: 13px;
  line-height: 15px;
  margin-left: 2px;
  color: #777;
`;

export const CardPriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CardPrice = styled.div`
  display: flex;
`;

export const CardPriceValue = styled.div`
  font-size: 24px;
  margin-left: 2px;
  font-weight: 500;
`;

export const CardPriceCurrency = styled.div`
  color: #999;
  margin-left: 6px;
  margin-top: 1px;
  font-weight: 500;
  font-size: 14px;
`;
export const CardEconomy = styled.div``;
export const CardTenderInfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${(props: any) => props.align}
` as any;

export const CardTenderInfoValue = styled.div`
  color: #fa9504;
  letter-spacing: -.5px;
  font-size: 13px;
  font-weight: 500;
`;

export const CardTenderInfoTitle = styled.div`
  font-size: 12px;
  color: #777;
`;
export const CardTenderInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  margin-left: 3px;
`;