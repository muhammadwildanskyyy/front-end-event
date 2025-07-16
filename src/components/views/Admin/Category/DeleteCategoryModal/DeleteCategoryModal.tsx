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
import useDeleteCategoryModal from "./useDeleteCategoryModal";

interface PropTypes {
  isOpen: boolean;
  onClose: () => void;
  onOpenChange: () => void;
  refetchCategory: () => void;
  selectedId: string;
  setSelectedId: Dispatch<SetStateAction<string>>;
}

const DeleteCategoryModal = (props: PropTypes) => {
  const {
    isOpen,
    onOpenChange,
    onClose,
    refetchCategory,
    selectedId,
    setSelectedId,
  } = props;

  const {
    mutateDeleteMutateCategory,
    isPendingMutateDeleteCategory,
    isSuccessDeleteMutateCategory,
  } = useDeleteCategoryModal();

  useEffect(() => {
    if (isSuccessDeleteMutateCategory) {
      onClose();
      refetchCategory();
    }
  }, [isSuccessDeleteMutateCategory]);
  return (
    <Modal
      onOpenChange={onOpenChange}
      isOpen={isOpen}
      placement="center"
      scrollBehavior="inside"
    >
      <ModalContent className="m-4">
        <ModalHeader>Delete Category</ModalHeader>
        <ModalBody>
          <p className="text-medium">
            Are you sure you want do delete this category
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
            disabled={isPendingMutateDeleteCategory}
          >
            Cancel
          </Button>
          <Button
            color="danger"
            type="submit"
            disabled={isPendingMutateDeleteCategory}
            onPress={() => mutateDeleteMutateCategory(selectedId)}
          >
            {isPendingMutateDeleteCategory ? (
              <Spinner size="sm" color="white" />
            ) : (
              "Delete Category"
            )}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default DeleteCategoryModal;
