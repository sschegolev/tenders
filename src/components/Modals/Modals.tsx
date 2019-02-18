import * as React from 'react';
import {LegacyPersonRegistryModal, NewTenderModal, PrivatePersonRegistryModal} from './';

export interface ModalsProps {
  isNewTenderModalOpen: boolean;
  isLegalPersonModalOpen: boolean;
  isPrivatePersonModalOpen: boolean;
}

const Modals: React.SFC<ModalsProps> = ({
  isNewTenderModalOpen,
  isPrivatePersonModalOpen,
  isLegalPersonModalOpen
}) => {
  return (
    <>
      {isNewTenderModalOpen && <NewTenderModal />}
      {isPrivatePersonModalOpen && <PrivatePersonRegistryModal />}
      {isLegalPersonModalOpen && <LegacyPersonRegistryModal />}
    </>
  )
}

export default Modals;