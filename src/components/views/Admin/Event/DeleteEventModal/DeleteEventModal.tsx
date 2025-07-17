import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Spinner,
} from "@nextui-org/react";
import React, { Dispatch, SetStateAction, useEffect } from "react";
import useDeleteEventModal from "./useDeleteEventModal";

interface PropTypes {
  isOpen: boolean;
  onClose: () => void;
  onOpenChange: () => void;
  refetchEvent: () => void;
  selectedId: string;
  setSelectedId: Dispatch<SetStateAction<string>>;
}

const DeleteEventModal = (props: PropTypes) => {
  const {
    isOpen,
    onOpenChange,
    onClose,
    refetchEvent,
    selectedId,
    setSelectedId,
  } = props;

  const {
    mutateDeleteMutateEvent,
    isPendingMutateDeleteEvent,
    isSuccessDeleteMutateEvent,
  } = useDeleteEventModal();

  useEffect(() => {
    if (isSuccessDeleteMutateEvent) {
      onClose();
      refetchEvent();
    }
  }, [isSuccessDeleteMutateEvent]);
  return (
    <Modal
      onOpenChange={onOpenChange}
      isOpen={isOpen}
      placement="center"
      scrollBehavior="inside"
    >
      <ModalContent className="m-4">
        <ModalHeader>Delete event</ModalHeader>
        <ModalBody>
          <p className="text-medium">
            Are you sure you want do delete this event
          </p>
        </ModalBody>
        <ModalFooter>
          <Button
            color="danger"
            variant="flat"
            onPress={() => {
              onClose;
              setSelectedId("");
            }}
            disabled={isPendingMutateDeleteEvent}
          >
            Cancel
          </Button>
          <Button
            color="danger"
            type="submit"
            disabled={isPendingMutateDeleteEvent}
            onPress={() => mutateDeleteMutateEvent(selectedId)}
          >
            {isPendingMutateDeleteEvent ? (
              <Spinner size="sm" color="white" />
            ) : (
              "Delete Event"
            )}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default DeleteEventModal;
