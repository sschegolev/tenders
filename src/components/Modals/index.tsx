import { connect } from "../connect";
import LegacyPersonRegistryModal, { LegacyPersonRegistryModalProps } from './LegacyPersonRegistry';
import Modals, { ModalsProps } from './Modals';
import NewTender from './NewTender';
import PrivatePersonRegistryModal, { PrivatePersonRegistryModalProps } from './PrivatePersonRegistry';

const ConnectedModals = connect<ModalsProps>(
  ({
    modalStore: {isNewTenderModalOpen, isLegalPersonModalOpen, isPrivatePersonModalOpen}
  }) => ({
    isNewTenderModalOpen,
    isLegalPersonModalOpen,
    isPrivatePersonModalOpen
  }),
  Modals
);

const ConnectedNewTender = connect(
  ({
    modalStore: {setNewTenderModalOpenValue}
  }) => ({
    closeNewTenderModal: () => setNewTenderModalOpenValue(false)
  }),
  NewTender
);

const ConnectedPrivatePersonRegistryModal = connect<PrivatePersonRegistryModalProps>(
  ({
    modalStore: {setPrivatePersonModalOpenValue}
  }) => ({
    closePrivatePersonRegistryModal: () => setPrivatePersonModalOpenValue(false)
  }),
  PrivatePersonRegistryModal
);

const ConnectedLegacyPersonRegistryModal = connect<LegacyPersonRegistryModalProps>(
  ({
    modalStore: {setLegalPersonModalOpenValue}
  }) => ({
    closeLegacyPersonRegistryModal: () => setLegalPersonModalOpenValue(false)
  }),
  LegacyPersonRegistryModal
);

export {ConnectedModals as Modals};
export {ConnectedNewTender as NewTenderModal};
export {ConnectedPrivatePersonRegistryModal as PrivatePersonRegistryModal};
export {ConnectedLegacyPersonRegistryModal as LegacyPersonRegistryModal};