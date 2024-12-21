// import React from "react";
// import { Button } from "@mantine/core";
// import { modals } from "@mantine/modals";

// function SupportModal({ label }) {
//   const openModal = () => {
//     const modalConfig = {
//       title: `Are You Sure.!, want to ${label} this complaint`,
//       size: "sm",
//       radius: "md",
//       withCloseButton: false,
//       labels: { confirm: "Confirm", cancel: "Cancel" },
//       onCancel: () => console.log("Cancel")
//     };

//     // Conditionally add onConfirm function
//     if (label === "Hold") {
//       modalConfig.onConfirm = () => console.log("Added to hold");
//     }
//     if (label === "Resolved") {
//       modalConfig.onConfirm = () => console.log("Resolved");
//     }

//     modals.openConfirmModal(modalConfig);
//   };

//   return (
//     <Button bg="#182452" onClick={openModal}>
//       {label}
//     </Button>
//   );
// }

// export default SupportModal;

// import React from "react";
// import { Button } from "@mantine/core";
// import { modals } from "@mantine/modals";

// function SupportModal({ label }) {
//   const openModal = () => {
//     const modalConfig = {
//       title: `Are You Sure.!, want to ${label} this complaint`,
//       size: "sm",
//       radius: "md",
//       withCloseButton: false,
//       labels: { confirm: "Confirm", cancel: "Cancel" },
//       onCancel: () => console.log("Cancel")
//     };

//     // Conditionally add onConfirm function
//     if (label === "Hold") {
//       modalConfig.onConfirm = () => console.log("Added to hold");
//     }
//     if (label === "Resolved") {
//       modalConfig.onConfirm = () => console.log("Resolved");
//     }

//     modals.openConfirmModal(modalConfig);
//   };

//   return (
//     <Button bg="#182452" onClick={openModal}>
//       {label}
//     </Button>
//   );
// }

// export default SupportModal;

// import React from "react";
// import { Button } from "@mantine/core";
// import { modals } from "@mantine/modals";

// function SupportModal({ label }) {
//   const openModal = () => {
//     const modalConfig = {
//       title: `Are You Sure.!, want to ${label} this complaint`,
//       size: "sm",
//       radius: "md",
//       withCloseButton: false,
//       labels: { confirm: "Confirm", cancel: "Cancel" },
//       onCancel: () => console.log("Cancel")
//     };

//     // Conditionally add onConfirm function
//     if (label === "Hold") {
//       modalConfig.onConfirm = () => console.log("Added to hold");
//     }
//     if (label === "Resolved") {
//       modalConfig.onConfirm = () => console.log("Resolved");
//     }

//     modals.openConfirmModal(modalConfig);
//   };

//   return (
//     <Button bg="#182452" onClick={openModal}>
//       {label}
//     </Button>
//   );
// }

// export default SupportModal;

// import React from "react";
// import { Button } from "@mantine/core";
// import { modals } from "@mantine/modals";
// import { useNavigate } from "react-router-dom"; // Import useNavigate instead of useHistory

// function SupportModal({ label, complaint }) {
//   const navigate = useNavigate(); // Initialize useNavigate hook

//   const openModal = () => {
//     const modalConfig = {
//       title: `Are You Sure, want to ${label} this complaint?`,
//       size: "sm",
//       radius: "md",
//       withCloseButton: false,
//       labels: { confirm: "Confirm", cancel: "Cancel" },
//       onCancel: () => console.log("Cancel")
//     };

//     // Conditionally add onConfirm function
//     if (label === "Hold") {
//       modalConfig.onConfirm = () => handleHoldClick(complaint);
//     }
//     if (label === "Resolve") {
//       modalConfig.onConfirm = () => handleResolvedClick(complaint);
//     }

//     modals.openConfirmModal(modalConfig);
//   };

//   const handleHoldClick = (complaint) => {
//     // Update status to "ongoing" in the JSON server
//     fetch(`http://localhost:3003/support/${complaint.id}`, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ ...complaint, status: "ongoing" }),
//     })
//       .then((response) => response.json())
//       .then((updatedComplaint) => {
//         console.log("Complaint held successfully:", updatedComplaint);
//         navigate("/main-page/Support"); // Navigate to '/main-page/Support'
//       })
//       .catch((error) => console.error("Error updating complaint:", error));
//   };
//   const handleResolvedClick = (complaint) => {
//     // Update status to "ongoing" in the JSON server
//     fetch(`http://localhost:3003/support/${complaint.id}`, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ ...complaint, status: "resolved" }),
//     })
//       .then((response) => response.json())
//       .then((updatedComplaint) => {
//         console.log("Complaint held successfully:", updatedComplaint);
//         navigate("/main-page/Support"); // Navigate to '/main-page/Support'
//       })
//       .catch((error) => console.error("Error updating complaint:", error));
//   };

//   return (
//     <Button bg="#182452" onClick={openModal}>
//       {label}
//     </Button>
//   );
// }

// export default SupportModal;

import React from "react";
import { Button } from "@mantine/core";
import { modals } from "@mantine/modals";
import { useNavigate } from "react-router-dom"; // Import useNavigate instead of useHistory
import supportData from "./../../../data/Support-data/Support.json"; // Import JSON data

function SupportModal({ label, complaint }) {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const openModal = () => {
    const modalConfig = {
      title: `Are You Sure, want to ${label} this complaint?`,
      size: "sm",
      radius: "md",
      withCloseButton: false,
      labels: { confirm: "Confirm", cancel: "Cancel" },
      onCancel: () => console.log("Cancel"),
    };

    // Conditionally add onConfirm function
    if (label === "Hold") {
      modalConfig.onConfirm = () => console.log("Hold");
    }
    if (label === "Resolve") {
      modalConfig.onConfirm = () =>  console.log("Resolved") ;
    }

    modals.openConfirmModal(modalConfig);
  };

 
  return (
    <Button bg="#182452" onClick={openModal}>
      {label}
    </Button>
  );
}

export default SupportModal;
