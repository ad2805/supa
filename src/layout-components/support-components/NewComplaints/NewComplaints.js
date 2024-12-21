// import React from "react";
// import { Box, Flex, Paper, Image, Button, Text } from "@mantine/core";
// import SupportData from "./../../../data/Support-data/Support.json";
// import defaultImage from "./../../../assets/icons/defaultImage .png";
// import { useNavigate } from "react-router-dom";
// import "./NewComplaints.css";

// export default function NewComplaints({ newComplaints }) {
//   const navigate = useNavigate();

//   const handleViewClick = (complaint) => {
//     navigate(`/main-page/Support/ViewComplaints/${complaint.username}`, {
//       state: { complaint}
//     });
//   };

//   // const newComplaints = SupportData.filter(
//   //   (complaint) => complaint.status === "newComplaints"
//   // );

//   return (
//     <Paper mt="sm" bg="transparent">
//       {newComplaints.map((complaint, index) => (
//         <Box
//           key={index}
//           mb="10px"
//           Text="sm"
//           bg="#FFFFFF"
//           style={{
//             boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.4)",
//           }}
//         >
//           <Flex
//             align="center"
//             justify="flex-start"
//             bg="#FFFFFF"
//             m="md"
//             p="md"
//             gap="md"
//             className="flexNewComplaints   "
//           >
//             <Box w="18%">
//               <Image src={complaint.imageUrl} w="40%" className="imgBox" />
//             </Box>
//             <Box w="75%" className="detailsBox">
//               <Flex justify="space-between" >
//                 <Box w="20%">
//                   <Flex direction="column" justify="center" gap="sm">
//                     <Text
// size="24px"
//                       style={{ fontWeight: "400" }}
//                       className="newcomplaints"
//                     >
//                       Owner Name
//                     </Text>
//                     <Text
//                       size="24px"
//                       style={{ color: "#00000080" }}
//                       className="newcomplaints"
//                     >
//                       {complaint.username}
//                     </Text>
//                   </Flex>
//                 </Box>
//                 <Box w="18%">
//                   <Flex direction="column" justify="center" gap="sm">
//                     <Text
//                       size="24px"
//                       style={{ fontWeight: "400" }}
//                       className="newcomplaints"
//                     >
//                       Complaint id:
//                     </Text>
//                     <Text
//                       size="24px"
//                       style={{ color: "#00000080" }}
//                       className="newcomplaints"
//                     >
//                       {complaint.Complaintid}
//                     </Text>
//                   </Flex>
//                 </Box>
//                 <Box w="18%">
//                   <Flex direction="column" justify="center" gap="sm">
//                     <Text
//                       size="24px"
//                       style={{ fontWeight: "400" }}
//                       className="newcomplaints"
//                     >
//                       Date
//                     </Text>
//                     <Text
//                       size="24px"
//                       style={{ color: "#00000080" }}
//                       className="newcomplaints"
//                     >
//                       {complaint.date}
//                     </Text>
//                   </Flex>
//                 </Box>
//                 <Box w="18%">
//                   <Flex direction="column" justify="center" gap="sm">
//                     <Text
//                       size="24px"
//                       style={{ fontWeight: "400" }}
//                       className="newcomplaints"
//                     >
//                       Time
//                     </Text>
//                     <Text
//                       size="24px"
//                       style={{ color: "#00000080" }}
//                       className="newcomplaints"
//                     >
//                       {complaint.time}
//                     </Text>
//                   </Flex>
//                 </Box>
//               </Flex>
//             </Box>

//             <Button
//               bg="#182452"
//               onClick={() => handleViewClick(complaint)}
//               className="view-btn"
//             >
//               VIEW
//             </Button>
//           </Flex>
//         </Box>
//       ))}
//     </Paper>
//   );
// }

import React from "react";
import { Box, Flex, Paper, Image, Button, Text } from "@mantine/core";
// import defaultImage from "./../../../assets/icons/defaultImage.png";
import { useNavigate } from "react-router-dom";
import "./NewComplaints.css";

export default function NewComplaints({ newComplaints }) {
  const navigate = useNavigate();

  const handleViewClick = (complaint) => {
    navigate(`/main-page/Support/ViewComplaints/${complaint.username}`, {
      state: { complaint },
    });
  };

  if (newComplaints.length === 0) {
    return (
      <Paper mt="sm" bg="transparent" p="md">
        <Flex h="75vh" align="center" justify="center">
          <Text c="#00000080" size="40px">
            No New Complaints : )
          </Text>
        </Flex>
      </Paper>
    );
  }

  return (
    <Paper mt="sm" bg="transparent">
      {newComplaints.map((complaint, index) => (
        <Box
          key={index}
          Text="sm"
          bg="#FFFFFF"
          style={{
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.4)",
            borderRadius: "5px",
          }}
        >
          <Flex
            align="center"
            justify="flex-start"
            bg="#FFFFFF"
            m="md"
            p="md"
            gap="md"
            className="flexNewComplaints"
          >
            <Box w="18%">
              <Flex direction="column" justify="center" gap="sm">
                <Image
                  src={complaint.imageUrl}
                  w="40%"
                  className="imgBoxSupport"
                />
              </Flex>
            </Box>
            <Box w="100%" className="detailsBox">
              <Flex justify="space-between">
                <Box w="20%">
                  <Flex direction="column" justify="center" gap="xs">
                    <Text
                      size="24px"
                      style={{ fontWeight: "400" }}
                      className="newcomplaintsText"
                    >
                      Owner Name
                    </Text>
                    <Text
                      size="24px"
                      style={{ color: "#00000080" }}
                      className="newcomplaintsText"
                    >
                      {complaint.username}
                    </Text>
                  </Flex>
                </Box>
                <Box w="18%">
                  <Flex direction="column" justify="center" gap="xs">
                    <Text
                      size="24px"
                      style={{ fontWeight: "400" }}
                      className="newcomplaintsText"
                    >
                      Complaint ID
                    </Text>
                    <Text
                      size="24px"
                      style={{ color: "#00000080" }}
                      className="newcomplaintsText"
                    >
                      {complaint.Complaintid}
                    </Text>
                  </Flex>
                </Box>
                <Box w="18%">
                  <Flex direction="column" justify="center" gap="xs">
                    <Text
                      size="24px"
                      style={{ fontWeight: "400" }}
                      className="newcomplaintsText"
                    >
                      Date
                    </Text>
                    <Text
                      size="24px"
                      style={{ color: "#00000080" }}
                      className="newcomplaintsText"
                    >
                      {complaint.date}
                    </Text>
                  </Flex>
                </Box>
                <Box w="15%">
                  <Flex direction="column" justify="center" gap="xs">
                    <Text
                      size="24px"
                      style={{ fontWeight: "400" }}
                      className="newcomplaintsText"
                    >
                      Time
                    </Text>
                    <Text
                      size="24px"
                      style={{ color: "#00000080" }}
                      className="newcomplaintsText"
                    >
                      {complaint.time}
                    </Text>
                  </Flex>
                </Box>
              </Flex>
            </Box>
            <Box>
              <Button
                bg="#182452"
                onClick={() => handleViewClick(complaint)}
                size="xs"
              >
                <Text className="newcomplaintsText">VIEW</Text>
              </Button>
            </Box>
          </Flex>
        </Box>
      ))}
    </Paper>
  );
}
