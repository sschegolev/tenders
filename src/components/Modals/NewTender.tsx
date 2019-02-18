import * as React from 'react';
import withModal from '../HOC/withModal';

interface NewTenderModalProps {
  closeNewTenderModal: () => void;
}

const NewTenderModal: React.SFC<NewTenderModalProps> = ({closeNewTenderModal}) => {

  const handleCloseButtonClick = () => {
    closeNewTenderModal();
  }

  return (
    <div>
      <div onClick={handleCloseButtonClick}>
        close
      </div>
      new tender modal
    </div>
  )
};

export default withModal(NewTenderModal);