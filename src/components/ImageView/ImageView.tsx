import * as React from 'react';
import { ImageCarousel } from './ImageCarousel/ImageCarousel';
import { Image, ImageView as View, ImageViewContainer } from './styles';

interface ImageViewProps {
  images: string[];
}

interface ImageViewState {
  currentImage: string;
}

export class ImageView extends React.Component<ImageViewProps, ImageViewState> {
  constructor(props: ImageViewProps) {
    super(props);
    this.state = {
      currentImage: props.images[0]
    };
  }

  render() {
    return (
      <ImageViewContainer>
        <View>
          <Image src={this.state.currentImage} />
        </View>
        <ImageCarousel images={this.props.images} />
      </ImageViewContainer>
    );
  }
}
