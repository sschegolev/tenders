import * as React from 'react';
import {CustomArrowProps} from 'react-slick';
import {NextArrowComponent, PrevArrowComponent} from './styles';


export const NextArrow = ({onClick}: CustomArrowProps) => {
  return (
    <NextArrowComponent
      onClick={onClick}
    >
      <img src="assets/images/ic_arrow.png"/>
    </NextArrowComponent>
  );
};

export const PrevArrow = ({onClick}: CustomArrowProps) => {
  return (
    <PrevArrowComponent
      onClick={onClick}
    >
      <img src="assets/images/ic_arrow.png"/>
    </PrevArrowComponent>
  );
};
