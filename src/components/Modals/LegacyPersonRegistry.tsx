import * as React from 'react';
import withModal from '../HOC/withModal';

export interface LegacyPersonRegistryModalProps {
  closeLegacyPersonRegistryModal: () => void;
}

const LegacyPersonRegistryModal: React.SFC<LegacyPersonRegistryModalProps> = ({closeLegacyPersonRegistryModal}) => {

  const handleCloseButtonClick = () => {
    closeLegacyPersonRegistryModal();
  }

  return (
    <div>
      <div onClick={handleCloseButtonClick}>
        close
      </div>
      legacy person
    </div>
  )
};

export default withModal(LegacyPersonRegistryModal);