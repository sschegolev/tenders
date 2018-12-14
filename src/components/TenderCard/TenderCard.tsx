import * as React from 'react';
import {TenderModel} from '../../models';
import {
  Card,
  CardDescription,
  CardEconomy,
  CardImage, CardImageBlock,
  CardInfoContainer,
  CardPrice,
  CardPriceContainer,
  CardPriceCurrency,
  CardPriceValue,
  CardTenderInfo,
  CardTenderInfoBlock,
  CardTenderInfoTitle,
  CardTenderInfoValue
} from './styles';

interface TenderCardProps {
  tender: TenderModel,
  onCardCLick: (id: string) => void;
}

const DEFAULT_IMAGE = 'assets/images/simple_logo.png';
const getTenderImageSrc = (src: string | undefined) => src || DEFAULT_IMAGE;

export const TenderCard = ({tender, onCardCLick}: TenderCardProps) => {
  const handleCardClick = () => {
    onCardCLick(tender.id);
  };

  return (
    <Card
      onClick={handleCardClick}
    >
      <CardImageBlock>
        <CardImage>
          <img src={getTenderImageSrc(tender.image)}/>
        </CardImage>
      </CardImageBlock>
      <CardInfoContainer>
        <CardDescription>
          {tender.name}
        </CardDescription>
        <CardPriceContainer>
          <CardPrice>
            <CardPriceValue>
              {tender.price}
            </CardPriceValue>
            <CardPriceCurrency>
              руб
            </CardPriceCurrency>
          </CardPrice>
          <CardEconomy>
            <CardTenderInfoBlock align={'flex-end'}>
              <CardTenderInfoValue>
                {tender.economy}%
              </CardTenderInfoValue>
              <CardTenderInfoTitle>
                Экон.
              </CardTenderInfoTitle>
            </CardTenderInfoBlock>
          </CardEconomy>
        </CardPriceContainer>
        <CardTenderInfo>
          <CardTenderInfoBlock align={'flex-start'}>
            <CardTenderInfoValue>
              {new Date(tender.startDate).toLocaleDateString()}
            </CardTenderInfoValue>
            <CardTenderInfoTitle>
              Начало
            </CardTenderInfoTitle>
          </CardTenderInfoBlock>
          {
            !!tender.participant && (
              <CardTenderInfoBlock align={'center'}>
                <CardTenderInfoValue>
                  {tender.participant}
                </CardTenderInfoValue>
                <CardTenderInfoTitle>
                  Участн.
                </CardTenderInfoTitle>
              </CardTenderInfoBlock>
            )
          }
          {
            !!tender.goodsQuantity && (
              <CardTenderInfoBlock align={'flex-end'}>
                <CardTenderInfoValue>
                  {tender.goodsQuantity}
                </CardTenderInfoValue>
                <CardTenderInfoTitle>
                  Товаров
                </CardTenderInfoTitle>
              </CardTenderInfoBlock>
            )
          }
        </CardTenderInfo>
      </CardInfoContainer>
    </Card>
  )
}
