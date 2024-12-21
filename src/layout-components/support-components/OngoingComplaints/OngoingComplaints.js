import React from "react";
import { Box, Flex, Paper, Image, Button, Text } from "@mantine/core";
import defaultImage from "./../../../assets/icons/defaultImage .png";
import { useNavigate } from "react-router-dom";
import "./OngoingComplaints.css";
export default function OngoingComplaints({ ongoingComplaints }) {
  const navigate = useNavigate();

  const handleViewClick = (complaint) => {
    navigate(`/main-page/Support/ViewComplaints/${complaint.username}`, {
      state: { complaint },
    });
  };
  if (ongoingComplaints.length === 0) {
    return (
      <Paper mt="sm" bg="transparent" p="md">
        <Flex h="75vh" align="center" justify="center">
          <Text c="#00000080" size="40px">
            No On-Going Complaints : )
          </Text>
        </Flex>
      </Paper>
    );
  }

  return (
    <Paper mt="sm" bg="transparent">
      {ongoingComplaints.map((complaint, index) => (
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
            className="flexOngoingComplaints"
          >
            <Box w="18%">
              <Flex direction="column" justify="center" gap="sm">
                <Image
                  src={complaint.imageUrl}
                  w="40%"
                  className="imgBoxOngoing"
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
                      className="ongoingComplaintsText"
                    >
                      Owner Name
                    </Text>
                    <Text
                      size="24px"
                      style={{ color: "#00000080" }}
                      className="ongoingComplaintsText"
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
                      className="ongoingComplaintsText"
                    >
                      Complaint ID
                    </Text>
                    <Text
                      size="24px"
                      style={{ color: "#00000080" }}
                      className="ongoingComplaintsText"
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
                      className="ongoingComplaintsText"
                    >
                      Date
                    </Text>
                    <Text
                      size="24px"
                      style={{ color: "#00000080" }}
                      className="ongoingComplaintsText"
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
                      className="ongoingComplaintsText"
                    >
                      Time
                    </Text>
                    <Text
                      size="24px"
                      style={{ color: "#00000080" }}
                      className="ongoingComplaintsText"
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
                <Text className="ongoingComplaintsText">VIEW</Text>
              </Button>
            </Box>
          </Flex>
        </Box>
      ))}
    </Paper>
  );
}
