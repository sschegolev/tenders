import * as React from 'react';
import { StyledPopup } from './styles';

interface PopupProps {
  closeChild: () => void;
  styles?: any;
}

class Popup extends React.Component<PopupProps> {

  popup: any;

  constructor(props: PopupProps) {
    super(props);

    document.body.addEventListener('click', this.handleClick);
  }

  componentWillUnmount() {
    document.body.removeEventListener('click', this.handleClick);
  }

  handleClick = (event: any) => {
    if (!this.popup.contains(event.target)) {
      this.props.closeChild();
    }
  }

  render() {
    return (
      <StyledPopup
        ref={(popup: any) => this.popup = popup}
        style={{...this.props.styles}}
      >
        {this.props.children}
      </StyledPopup>
    )
  }

}

export default Popup;
