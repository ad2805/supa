import React from "react";
import { Button } from "@mantine/core";
import { modals } from "@mantine/modals";

function SosModal() {
  const openModal = () => {
    const modalConfig = {
      title: `Are you sure you want to mark this as attended?`,
      size: "sm",
      radius: "md",
      withCloseButton: false,
      labels: { confirm: "Confirm", cancel: "Cancel" },
      onCancel: () => console.log("Cancel"),
      onConfirm: () => console.log("Marked as Attended")
    };

    modals.openConfirmModal(modalConfig);
  };

  return (
    <Button bg="#182452" onClick={openModal}>
      Mark as Attended
    </Button>
  );
}

export default SosModal;
