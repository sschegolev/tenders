import * as React from 'react';
import Avatar from '../Avatar/Avatar';
import {ImageUploader} from '../ImageUploader';
import {AvatarManagerContainer, ClearButton} from './styles';

export const SUPPORTED_IMAGE_TYPES = [
  'jpeg',
  'gif',
  'bmp',
  'png',
  'apng',
  'svg',
];

const DEFAULT_AVATAR = 'assets/images/ic_user2.png';

interface AvatarManagerState {
  avatarSrc: string;
}

export class AvatarManager extends React.Component<{}, AvatarManagerState> {

  state = {
    avatarSrc: DEFAULT_AVATAR
  };

  handleChange = (file: File) => {
    const reader = new FileReader();
    reader.onload = () => {
      this.setState({
        avatarSrc: (reader.result as string)
      })
    };
    reader.readAsDataURL(file);
  };

  handleClearButtonClick = () => {
    this.setState({
      avatarSrc: DEFAULT_AVATAR
    });
  };

  render() {
    return (
      <AvatarManagerContainer>
        <Avatar
          src={this.state.avatarSrc}
        />
        <ImageUploader
          onChange={this.handleChange}
          supportedFormats={SUPPORTED_IMAGE_TYPES.map(type => `image/${type}`)}
        />
        {
          this.state.avatarSrc !== DEFAULT_AVATAR && (
            <ClearButton
              onClick={this.handleClearButtonClick}
            >
              <img src="assets/images/ic_close_black.png" />
            </ClearButton>
          )
        }
      </AvatarManagerContainer>
    )
  }

}