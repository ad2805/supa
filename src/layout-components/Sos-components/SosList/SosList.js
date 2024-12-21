import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Flex,
  Paper,
  Image,
  Button,
  Text,
  AspectRatio,
} from "@mantine/core";
import jsonDataArray from "./../../../data/sos-json-data/sosdata.json";
import "./SosList.css";
export default function SosList() {
  const navigate = useNavigate();

  const handleViewClick = (id) => {
    // Navigate to the desired path with item ID as URL parameter
    navigate(`/main-page/Sos/SosView/${id}`);
  };

  return (
    <Paper m="5px" bg="transparent">
      {jsonDataArray.map((jsonData, id) => (
        <Box
          key={id}
          mb="10px"
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
            className="flexSosList"
          >
            <Box w="18%">
              <Flex direction="column" justify="center" gap="sm">
                <Image src={jsonData.imageSrc} w="40%" className="imgBoxSos" />
              </Flex>
            </Box>
            <Box w="100%" className="detailsBoxSos">
              <Flex justify="space-between">
                <Box w="20%">
                  <Flex direction="column" justify="center" gap="xs">
                    <Text
                      size="24px"
                      style={{ fontWeight: "400" }}
                      className="SosListText"
                    >
                      Owner Name
                    </Text>
                    <Text
                      size="24px"
                      style={{ color: "#00000080" }}
                      className="SosListText"
                    >
                      {jsonData.name}
                    </Text>
                  </Flex>
                </Box>
                {/* <Box w="18%">
                  <Flex direction="column" justify="center" gap="sm">
                    <Text
                      size="24px"
                      style={{ fontWeight: "400" }}
                      className="SosListText"
                    >
                      Location:
                    </Text>
                    <Text
                      size="24px"
                      style={{ color: "#00000080" }}
                      className="SosListText"
                    >
                      {jsonData.location}
                    </Text>
                  </Flex>
                </Box> */}

                <Box w="18%">
                  <Flex direction="column" justify="center" gap="xs">
                    <Text
                      size="24px"
                      style={{ fontWeight: "400" }}
                      className="SosListText"
                    >
                      Vehicle-No
                    </Text>
                    <Text
                      size="24px"
                      style={{ color: "#00000080" }}
                      className="SosListText"
                    >
                      {jsonData.vehicleNo}
                    </Text>
                  </Flex>
                </Box>

                <Box w="18%">
                  <Flex direction="column" justify="center" gap="xs">
                    <Text
                      size="24px"
                      style={{ fontWeight: "400" }}
                      className="SosListText"
                    >
                      Date
                    </Text>
                    <Text
                      size="24px"
                      style={{ color: "#00000080" }}
                      className="SosListText"
                    >
                      {jsonData.date}
                    </Text>
                  </Flex>
                </Box>
                <Box w="15%">
                  <Flex direction="column" justify="center" gap="xs">
                    <Text
                      size="24px"
                      style={{ fontWeight: "400" }}
                      className="SosListText"
                    >
                      Time
                    </Text>
                    <Text
                      size="24px"
                      style={{ color: "#00000080" }}
                      className="SosListText"
                    >
                      {jsonData.time}
                    </Text>
                  </Flex>
                </Box>
              </Flex>
            </Box>
            <Box>
              {jsonData.status === "new" ? (
                <Button
                  bg="#FF0000"
                  onClick={() => handleViewClick(id)}
                  className="SosButton"
                  size="xs"
                >
                  <Text className="SosListText">VIEW</Text>
                </Button>
              ) : (
                <Button
                  bg="#182452"
                  onClick={() => handleViewClick(id)}
                 size="xs"
                >
                  <Text className="SosListText">VIEW</Text>
                </Button>
              )}
            </Box>
          </Flex>
        </Box>
      ))}
    </Paper>
  );
}
