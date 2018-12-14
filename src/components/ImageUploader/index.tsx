import * as React from 'react';
import {createRef} from 'react';
import {ErrorHint} from '../ErrorHint/ErrorHint';
import {UploadButton, UploadFileFormat, UploadImageContainer, UploadInput, UploadLabel} from './styles';

interface ImageUploaderProps {
  onChange: (file: File[] | File) => void;
  supportedFormats?: string[];
  isMultiple?: boolean;
}

interface ImageUploaderState {
  isUnsupportedFormat: boolean;
}

export class ImageUploader extends React.Component<ImageUploaderProps, ImageUploaderState> {

  inputRef = createRef();
  state = {
    isUnsupportedFormat: false
  };

  handleChange = () => {
    const {isMultiple, onChange, supportedFormats} = this.props;

    const files = (this.inputRef.current! as any).files;
    let isUnsupportedFormat = false;
    if (isMultiple) {
      onChange(files);
    } else {
      const file = files[0];
      if (!file) {
        return;
      }

      if (supportedFormats!.some(supportedFormat => supportedFormat === file.type)) {
        onChange(file);
      } else {
        isUnsupportedFormat = true;
      }
      this.setState({
        isUnsupportedFormat
      });
    }
  };

  render() {
    return (
      <UploadImageContainer>
        <UploadButton>
          <UploadLabel htmlFor='file'>
            Загрузить фотографию
          </UploadLabel>
        </UploadButton>
        <UploadInput
          type='file'
          id='file'
          ref={this.inputRef}
          multiple={this.props.isMultiple}
          onChange={this.handleChange}
        />
        <UploadFileFormat>
          JPG, GIF or PNG. Max size of *****Kb
        </UploadFileFormat>
        {
          this.state.isUnsupportedFormat && (
            <ErrorHint
              error={'Не поддерживаемый формат.'}
            />
          )
        }
      </UploadImageContainer>
    );
  }
}
