import React from "react";
import { Box, Flex, Paper, Image, Button, Text } from "@mantine/core";
import defaultImage from "./../../../assets/icons/defaultImage .png";
import { useNavigate } from "react-router-dom";
import "./ResolvedComplaints.css";

export default function ResolvedComplaints({ resolvedComplaints }) {
  const navigate = useNavigate();

  const handleViewClick = (complaint) => {
    navigate(`/main-page/Support/ViewComplaints/${complaint.username}`, {
      state: { complaint },
    });
  };
  if (resolvedComplaints.length === 0) {
    return (
      <Paper mt="sm" bg="transparent" p="md">
        <Flex h="75vh" align="center" justify="center">
          <Text c="#00000080" size="40px">
            No Resolved Complaints : )
          </Text>
        </Flex>
      </Paper>
    );
  }
  return (
    <Paper mt="sm" bg="transparent">
      {resolvedComplaints.map((complaint, index) => (
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
                      className="ongoinComplaintsText"
                    >
                      Owner Name
                    </Text>
                    <Text
                      size="24px"
                      style={{ color: "#00000080" }}
                      className="ongoinComplaintsText"
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
                      className="ongoinComplaintsText"
                    >
                      Complaint ID
                    </Text>
                    <Text
                      size="24px"
                      style={{ color: "#00000080" }}
                      className="ongoinComplaintsText"
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
                      className="ongoinComplaintsText"
                    >
                      Date
                    </Text>
                    <Text
                      size="24px"
                      style={{ color: "#00000080" }}
                      className="ongoinComplaintsText"
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
                      className="ongoinComplaintsText"
                    >
                      Time
                    </Text>
                    <Text
                      size="24px"
                      style={{ color: "#00000080" }}
                      className="ongoinComplaintsText"
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
                <Text className="ongoinComplaintsText">VIEW</Text>
              </Button>
            </Box>
          </Flex>
        </Box>
      ))}
    </Paper>
  );
}
