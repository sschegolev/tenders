import * as React from 'react';
import Slider from "react-slick";
import {TenderModel} from '../../models';
import {TenderCard} from '../TenderCard/TenderCard';

import {NextArrow, PrevArrow} from './Arrows/Arrows';
import './tender-carousel.css';

interface TenderCarouselProps {
  tenders: TenderModel[];
  handleCardClick: (id: string) => void;
}

class TenderCarousel extends React.Component<TenderCarouselProps> {

  render() {
    const settings = {
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />
    };
    return (
      <div>
        <Slider {...settings}>
          {this.props.tenders.map(tender => {
            return (
              <TenderCard
                key={tender.id}
                tender={tender}
                onCardCLick={this.props.handleCardClick}
              />
            )
          })}
        </Slider>
      </div>
    );
  }
}

export default TenderCarousel;