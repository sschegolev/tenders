import * as React from 'react';
import { AvatarImage, StyledAvatar } from './styles';

interface AvatarProps {
  src: string;
}

class Avatar extends React.Component<AvatarProps> {

  render () {
    return (
      <StyledAvatar>
        <AvatarImage 
          src={this.props.src}
        /> 
      </StyledAvatar>
    )
  }

}

export default Avatar;