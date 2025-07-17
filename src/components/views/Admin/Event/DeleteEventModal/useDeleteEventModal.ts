import { ToasterContext } from "@/contexts/ToasterContext";
import categoryServices from "@/services/category.service";
import eventServices from "@/services/event.service";
import { useMutation } from "@tanstack/react-query";
import { useContext } from "react";

const useDeleteEventModal = () => {
  const { setToaster } = useContext(ToasterContext);

  const deleteEvent = async (id: string) => {
    const res = await eventServices.deleteEvent(id);
    return res;
  };

  const {
    mutate: mutateDeleteMutateEvent,
    isPending: isPendingMutateDeleteEvent,
    isSuccess: isSuccessDeleteMutateEvent,
  } = useMutation({
    mutationFn: deleteEvent,
    onError: (error) => {
      setToaster({
        type: "error",
        message: error.message,
      });
    },
    onSuccess: () => {
      setToaster({
        type: "success",
        message: "delete Event Success",
      });
    },
  });

  return {
    mutateDeleteMutateEvent,
    isPendingMutateDeleteEvent,
    isSuccessDeleteMutateEvent,
  };
};

export default useDeleteEventModal;
