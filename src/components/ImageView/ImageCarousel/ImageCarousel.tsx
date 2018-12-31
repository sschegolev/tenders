import * as React from 'react';
import Slider from 'react-slick';
import { ImagePreviewContainer } from '../styles';

interface ImageCarouselProps {
  images: string[];
}

export const ImageCarousel = ({ images }: ImageCarouselProps) => {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  return (
    <Slider {...settings}>
      {images.map(image => {
        return (
          <ImagePreviewContainer>
            <img src={image} />
          </ImagePreviewContainer>
        );
      })}
    </Slider>
  );
};
