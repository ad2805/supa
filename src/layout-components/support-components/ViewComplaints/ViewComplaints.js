// import React, { useState, useEffect } from "react";
// import { Button, Paper, Flex, Box, Text, Image, Textarea } from "@mantine/core";
// import { Link, useParams } from "react-router-dom";
// // import TextEditor from "../Text-editor/TextEditor";
// import "./ViewComplaints.css";
// import SupportModal from "../SupportModal/SupportModal";
// import SupportImageViewer from "./../SupportImageViewer/SupportImageViewer";

// export default function ViewComplaints() {
//   const { username } = useParams();
//   const [complaint, setComplaint] = useState(null);
//   const [message, setMessage] = useState("");
//   const [messageUpdatedTime, setMessageUpdatedTime] = useState("");
//   const [messageUpdatedDate, setMessageUpdatedDate] = useState("");

//   useEffect(() => {
//     fetch(`http://localhost:3003/support?username=${username}`)
//       .then((response) => response.json())
//       .then((data) => {
//         if (data.length > 0) {
//           setComplaint(data[0]);
//         } else {
//           throw new Error(`Complaint not found for username: ${username}`);
//         }
//       })
//       .catch((error) => console.error("Error fetching data:", error));
//   }, [username]);
//   const handleMessageChange = (e) => {
//     setMessage(e.target.value);
//     autoExpand(e.target);
//   };
//   const getCurrentTime = () => {
//     const date = new Date();
//     const hours = date.getHours();
//     const minutes = date.getMinutes();
//     const formattedTime = `${hours}:${minutes < 10 ? "0" + minutes : minutes}`;
//     return formattedTime;
//   };
//   const getCurrentDate = () => {
//     const date = new Date();
//     const day = date.getDate();
//     const month = date.getMonth() + 1; // Months are zero indexed
//     const year = date.getFullYear();
//     const formattedDate = `${day}/${month < 10 ? "0" + month : month}/${year}`;
//     return formattedDate;
//   };

//   const handleSaveMessage = () => {
//     // Update the complaint object with the new message
//     fetch(`http://localhost:3003/support/${complaint.id}`, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ ...complaint, message }),
//     })
//       .then((response) => response.json())
//       .then((updatedComplaint) => {
//         setComplaint(updatedComplaint);
//         setMessage(updatedComplaint.message); // Update message state with the new message

//         // Update message updated time
//         const updatedTime = getCurrentTime();
//         setMessageUpdatedTime(updatedTime);

//         // Update message updated date
//         const updatedDate = getCurrentDate();
//         setMessageUpdatedDate(updatedDate);

//         setMessage(""); // Clear the message input
//       })
//       .catch((error) => console.error("Error updating complaint:", error));
//   };

//   const autoExpand = (textarea) => {
//     // Reset height to minimum to allow for calculations
//     textarea.style.height = "auto";
//     // Set the height to the scroll height of the content, plus some padding
//     textarea.style.height = textarea.scrollHeight + 10 + "px";
//   };

//   if (!complaint) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <Paper m="5px" p="5px" bg="#EBEBEB" mih="93vh">
//       <Flex justify="flex-start" gap="10px">
//         {/* <Link to={`/main-page/Support?tab=${complaint.status}`}> */}
//         <Link to={`/main-page/Support`}>
//           <Button bg="#182452">Back</Button>
//         </Link>
//       </Flex>

//       <Paper bg="#FFFFFF80" mt="md" p="md">
//         <Box bg="#FFFFFF" p="md">
//           <Flex gap="xl" align="center" className="topSectionSupport">
//             <Box w="15%">
//               <Image src={complaint.imageUrl} />
//             </Box>
//             <Box w="85%" className="detailsSupport">
//               <Flex direction="column" gap="90px" pl="xl">
//                 <Flex>
//                   <Box w="30%">
//                     <Flex direction="column" gap="sm">
//                       <Text size="24px" className="detailsText">
//                         Owner Name
//                       </Text>
//                       <Text size="24px" className="detailsText" c="#00000080">
//                         {complaint.username}
//                       </Text>
//                     </Flex>
//                   </Box>
//                   <Box w="30%">
//                     <Flex direction="column" gap="sm">
//                       <Text size="24px" className="detailsText">
//                         Vehicle Number
//                       </Text>
//                       <Text size="24px" c="#00000080" className="detailsText">
//                         {complaint.vehicleno}
//                       </Text>
//                     </Flex>
//                   </Box>
//                   <Box w="30%">
//                     <Flex direction="column" gap="sm">
//                       <Text size="24px" className="detailsText">
//                         Address
//                       </Text>
//                       <Text size="24px" c="#00000080" className="detailsText">
//                         {complaint.address}
//                       </Text>
//                     </Flex>
//                   </Box>
//                 </Flex>
//                 <Flex>
//                   <Box w="30%">
//                     <Flex direction="column" gap="sm">
//                       <Text size="24px" className="detailsText">
//                         Complaint ID
//                       </Text>
//                       <Text size="24px" c="#00000080" className="detailsText">
//                         {complaint.Complaintid}
//                       </Text>
//                     </Flex>
//                   </Box>
//                   <Box w="30%">
//                     <Flex direction="column" gap="sm">
//                       <Text size="24px" className="detailsText">
//                         Date
//                       </Text>
//                       <Text size="24px" c="#00000080" className="detailsText">
//                         {complaint.date}
//                       </Text>
//                     </Flex>
//                   </Box>
//                   <Box w="30%">
//                     <Flex direction="column" gap="sm">
//                       <Text size="24px" className="detailsText">
//                         Time
//                       </Text>
//                       <Text size="24px" c="#00000080" className="detailsText">
//                         {complaint.time}
//                       </Text>
//                     </Flex>
//                   </Box>
//                 </Flex>
//               </Flex>
//             </Box>
//           </Flex>
//         </Box>
//       </Paper>

//       <Paper bg="#FFFFFF80" mt="md" p="md">
//         <Flex gap="md">
//           <Box
//             w="65%"
//             bg="#FFFFFF"
//             p="md"
//             mb="md"
//             style={{ borderRadius: "5px" }}
//             mih="24vh"
//           >
//             <Text size="28px">Complaint</Text>
//             <Flex pl="md" mt="lg" direction="column" gap="md">
//               <Box
//                 maw="75%"
//                 bg="#EBEBEB"
//                 mr="auto"
//                 style={{ borderRadius: "10px" }}
//               >
//                 <Box bg="#FFFFFF80" p="md">
//                   <Text size="24px" c="#00000080">
//                     {complaint.complaint}
//                   </Text>
//                 </Box>
//               </Box>

//               {complaint.message !== "" && (
//                 <Paper ml="auto" maw="75%">
//                   <Box bg="#EBEBEB" p="md" style={{ borderRadius: "10px" }}>
//                     <Box>
//                       <Text gap="xl" size="24px" c="#00000080">
//                         {complaint.message}
//                       </Text>
//                     </Box>
//                   </Box>
//                   <Flex gap="md">
//                     <Text c="#00000080" ml="md">
//                       User1
//                     </Text>
//                     {messageUpdatedTime && (
//                       <Text c="#00000080">{messageUpdatedTime}</Text>
//                     )}
//                     {messageUpdatedDate && (
//                       <Text c="#00000080">{messageUpdatedDate}</Text>
//                     )}
//                   </Flex>
//                 </Paper>
//               )}
//             </Flex>
//           </Box>
//           <Box
//             w="35%"
//             bg="#FFFFFF"
//             p="md"
//             mb="md"
//             style={{ borderRadius: "5px" }}
//             mih="28vh"
//           >
//             <Text size="28px">Screenshots</Text>

//             <SupportImageViewer complaint={complaint} />
//           </Box>
//         </Flex>
//         {complaint.status !== "resolved" && (
//           <Box>
//             {/* {complaint.message === "" && ( */}
//             <Box bg="#FFFFFF">
//               <Textarea
//                 className="textareaAutoHeight"
//                 placeholder="Type your message here..."
//                 value={message}
//                 onChange={handleMessageChange}
//               />
//             </Box>
//             {/* )} */}
//             <Flex justify="space-between" m="sm">
//               <Flex gap="xl">
//                 {complaint.status !== "ongoing" && (
//                   <Box>
//                     <SupportModal label="Hold" complaint={complaint} />
//                   </Box>
//                 )}
//                 <SupportModal label="Resolve" complaint={complaint} />
//                 {/* <Button bg="#182452" onClick={handleResolvedClick}>
//                   Resolved
//                 </Button> */}
//               </Flex>
//               <Button
//                 bg="#182452"
//                 onClick={handleSaveMessage}
//                 disabled={!message.trim()}
//               >
//                 Send
//               </Button>
//             </Flex>
//           </Box>
//         )}
//       </Paper>
//     </Paper>
//   );
// }

// import React, { useState, useEffect, useRef } from "react";
// import {
//   Button,
//   Paper,
//   Flex,
//   Box,
//   Text,
//   Image,
//   Textarea,
//   ScrollArea,
//   UnstyledButton,
// } from "@mantine/core";
// import { Link, useParams } from "react-router-dom";
// // import TextEditor from "../Text-editor/TextEditor";
// import "./ViewComplaints.css";
// import SupportModal from "../SupportModal/SupportModal";
// import SupportImageViewer from "./../SupportImageViewer/SupportImageViewer";
// import SupportChatBox from "../SupportChatBox/SupportChatBox";
// import SupportViewTable from "./../SupportViewTable/SupportViewTable";
// import sendIcon from "./../../../assets/buttons/sendIcon.png";
// import { IconSend } from "@tabler/icons-react";

// export default function ViewComplaints() {
//   const { username } = useParams();
//   const [complaint, setComplaint] = useState(null);
//   const [message, setMessage] = useState("");
//   const [messageList, setMessageList] = useState([]);
//   const viewport = useRef(null);

//   useEffect(() => {
//     fetch(`http://localhost:3003/support?username=${username}`)
//       .then((response) => response.json())
//       .then((data) => {
//         if (data.length > 0) {
//           setComplaint(data[0]);
//           setMessageList(data[0].messages || []); // Set messageList with messages from complaint
//         } else {
//           throw new Error(`Complaint not found for username: ${username}`);
//         }
//       })
//       .catch((error) => console.error("Error fetching data:", error));
//   }, [username]);
//   const handleSaveMessage = (newMessage) => {
//     fetch(`http://localhost:3003/support/${complaint.id}`, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         ...complaint,
//         messages: [...complaint.messages, newMessage],
//       }),
//     })
//       .then((response) => response.json())
//       .then((updatedComplaint) => {
//         setComplaint(updatedComplaint);
//         setMessageList(updatedComplaint.messages);
//         setMessage(""); // Clear the message input
//       })
//       .catch((error) => console.error("Error updating complaint:", error));
//   };

//   const handleMessageSubmit = () => {
//     if (!message.trim()) return; // Prevent sending empty messages
//     const newMessage = {
//       text: message,
//       timestamp: new Date().toISOString(),
//       sender: "user",
//     };
//     handleSaveMessage(newMessage);
//   };

//   const handleSupportMessageSubmit = () => {
//     if (!message.trim()) return; // Prevent sending empty messages
//     const newMessage = {
//       text: message,
//       timestamp: new Date().toISOString(),
//       sender: "support",
//     };
//     handleSaveMessage(newMessage);
//   };

//   const autoExpand = (textarea) => {
//     // Reset height to minimum to allow for calculations
//     textarea.style.height = "auto";
//     // Set the height to the scroll height of the content, plus some padding
//     textarea.style.height = textarea.scrollHeight + 10 + "px";
//   };
//   const scrollToBottom = () =>
//     viewport.current.scrollTo({
//       top: viewport.current.scrollHeight,
//       behavior: "smooth",
//     });
//   const handleButtonClick = () => {
//     // Call both handlers here
//     handleSupportMessageSubmit();
//     setTimeout(() => {
//       scrollToBottom();
//     }, 100);
//   };

//   if (!complaint) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <Paper m="5px" p="5px" bg="#EBEBEB" mih="93vh">
//       <Flex justify="flex-start" gap="10px">
//         {/* <Link to={`/main-page/Support?tab=${complaint.status}`}> */}
//         <Link to={`/main-page/Support`}>
//           <Button bg="#182452">Back</Button>
//         </Link>
//       </Flex>

//       <Paper bg="#FFFFFF80" mt="md" p="md">
//         <Box bg="#FFFFFF" p="md">
//           <Flex gap="xl" align="center" className="topSectionSupport">
//             <Box w="15%">
//               <Image src={complaint.imageUrl} />
//             </Box>
//             <Box w="85%" className="detailsSupport">
//               <Flex direction="column" gap="90px" pl="xl">
//                 <Flex>
//                   <Box w="30%">
//                     <Flex direction="column" gap="sm">
//                       <Text size="24px" className="detailsText">
//                         Owner Name
//                       </Text>
//                       <Text size="24px" className="detailsText" c="#00000080">
//                         {complaint.username}
//                       </Text>
//                     </Flex>
//                   </Box>
//                   <Box w="30%">
//                     <Flex direction="column" gap="sm">
//                       <Text size="24px" className="detailsText">
//                         Vehicle Number
//                       </Text>
//                       <Text size="24px" c="#00000080" className="detailsText">
//                         {complaint.vehicleno}
//                       </Text>
//                     </Flex>
//                   </Box>
//                   <Box w="30%">
//                     <Flex direction="column" gap="sm">
//                       <Text size="24px" className="detailsText">
//                         Address
//                       </Text>
//                       <Text size="24px" c="#00000080" className="detailsText">
//                         {complaint.address}
//                       </Text>
//                     </Flex>
//                   </Box>
//                 </Flex>
//                 <Flex>
//                   <Box w="30%">
//                     <Flex direction="column" gap="sm">
//                       <Text size="24px" className="detailsText">
//                         Complaint ID
//                       </Text>
//                       <Text size="24px" c="#00000080" className="detailsText">
//                         {complaint.Complaintid}
//                       </Text>
//                     </Flex>
//                   </Box>
//                   <Box w="30%">
//                     <Flex direction="column" gap="sm">
//                       <Text size="24px" className="detailsText">
//                         Date
//                       </Text>
//                       <Text size="24px" c="#00000080" className="detailsText">
//                         {complaint.date}
//                       </Text>
//                     </Flex>
//                   </Box>
//                   <Box w="30%">
//                     <Flex direction="column" gap="sm">
//                       <Text size="24px" className="detailsText">
//                         Time
//                       </Text>
//                       <Text size="24px" c="#00000080" className="detailsText">
//                         {complaint.time}
//                       </Text>
//                     </Flex>
//                   </Box>
//                 </Flex>
//               </Flex>
//             </Box>
//           </Flex>
//         </Box>
//       </Paper>

//       <Paper bg="#FFFFFF80" mt="md" p="md">
//         <Flex gap="md">
//           <Box
//             w="35%"
//             bg="#FFFFFF"
//             p="md"
//             mb="md"
//             style={{ borderRadius: "5px" }}
//             mih="28vh"
//           >
//             <Text size="28px">Screenshots</Text>
//             <SupportImageViewer complaint={complaint} />
//           </Box>
//           <Box
//             w="65%"
//             bg="#FFFFFF"
//             p="md"
//             mb="md"
//             style={{ borderRadius: "5px" }}
//             mih="28vh"
//           >
//             <Text size="28px">Details</Text>
//             <Box
//               style={{
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center",
//               }}
//               h="90%"
//             >
//               <SupportViewTable complaint={complaint} />
//             </Box>
//           </Box>
//         </Flex>
//         <Flex gap="md">
//           <Box
//             w="100%"
//             bg="#FFFFFF"
//             p="md"
//             mb="md"
//             style={{ borderRadius: "5px" }}
//             mih="24vh"
//           >
//             <Text size="28px">Complaint</Text>
//             <ScrollArea h={500} scrollbarSize={4} viewportRef={viewport}>
//               <SupportChatBox
//                 messageList={messageList}
//                 handleMessageSubmit={handleMessageSubmit}
//                 handleSupportMessageSubmit={handleSupportMessageSubmit}
//                 message={message}
//                 setMessage={setMessage}
//               />
//             </ScrollArea>

//             <Flex mt="md" align="center" gap="md" justify="center">
//               <Textarea
//                 w="100%"
//                 placeholder="Type your message here..."
//                 value={message}
//                 onChange={(e) => setMessage(e.target.value)}
//               />
//               <Image
//                 src={sendIcon}
//                 onClick={handleButtonClick}
//                 disabled={!message.trim()}
//                 h="50px"
//               />
//             </Flex>

//             {/* <Flex justify="flex-end" m="sm">
//               Button to send message
//               <Button
//                 bg="#182452"
//                 onClick={handleMessageSubmit}
//                 disabled={!message.trim()}
//               >
//                 Send (User)
//               </Button>
//               <Button
//                 bg="#182452"
//                 onClick={handleButtonClick}
//                 disabled={!message.trim()}
//               >
//                 Send
//               </Button>
//             </Flex> */}
//           </Box>
//         </Flex>
//       </Paper>
//       <Flex justify="space-between" m="sm">
//         {complaint.status !== "resolved" && (
//           <Box>
//             <Flex justify="space-between" m="sm" gap="md">
//               <Flex gap="xl">
//                 {complaint.status !== "ongoing" && (
//                   <Box>
//                     <SupportModal label="Hold" complaint={complaint} />
//                   </Box>
//                 )}
//                 <SupportModal label="Resolve" complaint={complaint} />
//                 {/* <Button bg="#182452" onClick={handleResolvedClick}>
//                   Resolved
//                 </Button> */}
//               </Flex>
//             </Flex>
//           </Box>
//         )}
//       </Flex>
//     </Paper>
//   );
// }

import React, { useState, useEffect, useRef } from "react";
import {
  Button,
  Paper,
  Flex,
  Box,
  Text,
  Image,
  Textarea,
  ScrollArea,
} from "@mantine/core";
import { Link, useParams } from "react-router-dom";
import "./ViewComplaints.css";
import SupportModal from "../SupportModal/SupportModal";
import SupportImageViewer from "./../SupportImageViewer/SupportImageViewer";
import SupportChatBox from "../SupportChatBox/SupportChatBox";
import SupportViewTable from "./../SupportViewTable/SupportViewTable";
import sendIcon from "./../../../assets/buttons/sendIcon.png";
import supportData from "./../../../data/Support-data/Support.json"; // Import JSON data
import { useNavigate } from "react-router-dom";

export default function ViewComplaints() {
  const { username } = useParams();
  const [complaint, setComplaint] = useState(null);
  const [message, setMessage] = useState("");
  const [messageList, setMessageList] = useState([]);
  const viewport = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Find the complaint with the matching username from the imported JSON data
    const foundComplaint = supportData.support.find(
      (item) => item.username === username
    );

    if (foundComplaint) {
      setComplaint(foundComplaint);
      setMessageList(foundComplaint.messages || []);
    } else {
      console.error(`Complaint not found for username: ${username}`);
    }
  }, [username]);

  const handleSaveMessage = (newMessage) => {
    const updatedComplaint = {
      ...complaint,
      messages: [...complaint.messages, newMessage],
    };
    setComplaint(updatedComplaint);
    setMessageList(updatedComplaint.messages);
    setMessage(""); // Clear the message input
  };

  const handleSupportMessageSubmit = () => {
    if (!message.trim()) return; // Prevent sending empty messages
    const newMessage = {
      text: message,
      timestamp: new Date().toISOString(),
      sender: "support",
    };
    handleSaveMessage(newMessage);
  };

  const handleMessageSubmit = () => {
    if (!message.trim()) return; // Prevent sending empty messages
    const newMessage = {
      text: message,
      timestamp: new Date().toISOString(),
      sender: "user",
    };
    handleSaveMessage(newMessage);
  };

  const autoExpand = (textarea) => {
    // Reset height to minimum to allow for calculations
    textarea.style.height = "auto";
    // Set the height to the scroll height of the content, plus some padding
    textarea.style.height = textarea.scrollHeight + 10 + "px";
  };
  const scrollToBottom = () =>
    viewport.current.scrollTo({
      top: viewport.current.scrollHeight,
      behavior: "smooth",
    });
  const handleButtonClick = () => {
    // Call both handlers here
    handleSupportMessageSubmit();
    setTimeout(() => {
      scrollToBottom();
    }, 100);
  };

  const handleBackButton = () => {
    navigate(-1);
  };
  if (!complaint) {
    return <div>Loading...</div>;
  }

  return (
    <Paper m="5px" p="5px" bg="#EBEBEB" mih="93vh">
      <Flex justify="flex-start" gap="10px">
        {/* <Link to={`/main-page/Support?tab=${complaint.status}`}> */}
        <Button bg="#182452" onClick={handleBackButton}>
          Back
        </Button>
      </Flex>
      <Paper bg="#FFFFFF80" mt="md" p="md">
        <Box bg="#FFFFFF" p="md">
          <Flex gap="xl" align="center" className="topSectionSupport">
            <Box w="15%">
              <Image src={complaint.imageUrl} />
            </Box>

            <Box w="85%" className="detailsSupport">
              <Flex direction="column" gap="90px" pl="xl">
                <Flex>
                  <Box w="30%">
                    <Flex direction="column" gap="sm">
                      <Text size="24px" className="detailsText">
                        Owner Name
                      </Text>

                      <Text size="24px" className="detailsText" c="#00000080">
                        {complaint.username}
                      </Text>
                    </Flex>
                  </Box>

                  <Box w="30%">
                    <Flex direction="column" gap="sm">
                      <Text size="24px" className="detailsText">
                        Vehicle Number
                      </Text>

                      <Text size="24px" c="#00000080" className="detailsText">
                        {complaint.vehicleno}
                      </Text>
                    </Flex>
                  </Box>

                  <Box w="30%">
                    <Flex direction="column" gap="sm">
                      <Text size="24px" className="detailsText">
                        Address
                      </Text>

                      <Text size="24px" c="#00000080" className="detailsText">
                        {complaint.address}
                      </Text>
                    </Flex>
                  </Box>
                </Flex>

                <Flex>
                  <Box w="30%">
                    <Flex direction="column" gap="sm">
                      <Text size="24px" className="detailsText">
                        Complaint ID
                      </Text>

                      <Text size="24px" c="#00000080" className="detailsText">
                        {complaint.Complaintid}
                      </Text>
                    </Flex>
                  </Box>

                  <Box w="30%">
                    <Flex direction="column" gap="sm">
                      <Text size="24px" className="detailsText">
                        Date
                      </Text>

                      <Text size="24px" c="#00000080" className="detailsText">
                        {complaint.date}
                      </Text>
                    </Flex>
                  </Box>

                  <Box w="30%">
                    <Flex direction="column" gap="sm">
                      <Text size="24px" className="detailsText">
                        Time
                      </Text>

                      <Text size="24px" c="#00000080" className="detailsText">
                        {complaint.time}
                      </Text>
                    </Flex>
                  </Box>
                </Flex>
              </Flex>
            </Box>
          </Flex>
        </Box>
      </Paper>
      <Paper bg="#FFFFFF80" mt="md" p="md">
        <Flex gap="md" className="viewComplaintsFlex">
          <Box
            w="35%"
            bg="#FFFFFF"
            p="md"
            mb="md"
            style={{ borderRadius: "5px" }}
            mih="28vh"
            className="viewComplaintsBox"
          >
            <Text size="28px">Screenshots</Text>
            <SupportImageViewer complaint={complaint} />
          </Box>
          <Box
            w="65%"
            bg="#FFFFFF"
            p="md"
            mb="md"
            style={{ borderRadius: "5px" }}
            mih="28vh"
            className="viewComplaintsBox"
          >
            <Text size="28px">Details</Text>
            <Box
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              h="90%"
            >
              <SupportViewTable complaint={complaint} />
            </Box>
          </Box>
        </Flex>
        <Flex gap="md">
          <Box
            w="100%"
            bg="#FFFFFF"
            p="md"
            mb="md"
            style={{ borderRadius: "5px" }}
            mih="24vh"
          >
            <Text size="28px">Complaint</Text>
            <ScrollArea h={500} scrollbarSize={4} viewportRef={viewport}>
              <SupportChatBox
                messageList={messageList}
                handleMessageSubmit={handleMessageSubmit}
                handleSupportMessageSubmit={handleSupportMessageSubmit}
                message={message}
                setMessage={setMessage}
              />
            </ScrollArea>

            <Flex mt="md" align="center" gap="md" justify="center">
              <Textarea
                w="100%"
                placeholder="Type your message here..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <Image
                src={sendIcon}
                onClick={handleButtonClick}
                disabled={!message.trim()}
                h="50px"
              />
            </Flex>

            {/* <Flex justify="flex-end" m="sm">
              Button to send message
              <Button
                bg="#182452"
                onClick={handleMessageSubmit}
                disabled={!message.trim()}
              >
                Send (User)
              </Button>
              <Button
                bg="#182452"
                onClick={handleButtonClick}
                disabled={!message.trim()}
              >
                Send
              </Button>
            </Flex> */}
          </Box>
        </Flex>
      </Paper>
      <Flex justify="space-between" m="sm">
        {complaint.status !== "resolved" && (
          <Box>
            <Flex justify="space-between" m="sm" gap="md">
              <Flex gap="xl">
                {complaint.status !== "ongoing" && (
                  <Box>
                    <SupportModal label="Hold" />
                  </Box>
                )}
                <SupportModal label="Resolved" />
              </Flex>
            </Flex>
          </Box>
        )}
      </Flex>
    </Paper>
  );
}
