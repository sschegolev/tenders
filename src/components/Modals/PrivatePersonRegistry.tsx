import * as React from 'react';
import withModal from '../HOC/withModal';

export interface PrivatePersonRegistryModalProps {
  closePrivatePersonRegistryModal: () => void;
}

const PrivatePersonRegistryModal: React.SFC<PrivatePersonRegistryModalProps> = ({closePrivatePersonRegistryModal}) => {

  const handleCloseButtonClick = () => {
    closePrivatePersonRegistryModal();
  }

  return (
    <div>
      <div onClick={handleCloseButtonClick}>
        close
      </div>
      private person
    </div>
  )
};

export default withModal(PrivatePersonRegistryModal);
