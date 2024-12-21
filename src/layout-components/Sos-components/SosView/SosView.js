import React from "react";
import { useParams, Link } from "react-router-dom";
import { Box, Paper, Flex, Text, Button, Image } from "@mantine/core";
import jsonDataArray from "./../../../data/sos-json-data/sosdata.json";
import SosGoogleMap from "./../../../layout-components/Sos-components/SosGoogleMap/SosGoogleMap";
import "./SosView.css";
import SosModal from "../SosModal/SosModal";
export default function SosView() {
  const { id } = useParams();

  // Find the item with the matching ID
  const sosItem = jsonDataArray.find((item, index) => index.toString() === id);

  return (
    <Paper m="5px" p="5px" bg="#EBEBEB" mih="92vh">
      <Flex justify="flex-start" gap="10px">
        <Link to="/main-page/Sos">
          <Button bg="#182452">Back</Button>
        </Link>
      </Flex>
      <Paper bg="#FFFFFF80" mt="md" p="md">
        <Box bg="#FFFFFF" p="md">
          <Flex gap="xl" align="center" className="topSectionSos">
            <Box w="15%">
              <Image src={sosItem.imageSrc} />
            </Box>
            <Box w="85%" className="detailsSos">
              <Flex direction="column" gap="90px" pl="xl">
                <Flex>
                  <Box w="30%">
                    <Flex direction="column" gap="sm">
                      <Text size="24px" className="detailsText">
                        Owner Name
                      </Text>
                      <Text size="24px" className="detailsText" c="#00000080">
                        {sosItem.name}
                      </Text>
                    </Flex>
                  </Box>
                  <Box w="30%">
                    <Flex direction="column" gap="sm">
                      <Text size="24px" className="detailsText">
                        Vehicle Number
                      </Text>
                      <Text size="24px" c="#00000080" className="detailsText">
                        {sosItem.vehicleNo}
                      </Text>
                    </Flex>
                  </Box>
                  <Box w="30%">
                    <Flex direction="column" gap="sm">
                      <Text size="24px" className="detailsText">
                        Address
                      </Text>
                      <Text size="24px" c="#00000080" className="detailsText">
                        {sosItem.address}
                      </Text>
                    </Flex>
                  </Box>
                </Flex>
                <Flex>
                  <Box w="30%">
                    <Flex direction="column" gap="sm">
                      <Text size="24px" className="detailsText">
                        Time
                      </Text>
                      <Text size="24px" c="#00000080" className="detailsText">
                        {sosItem.time}
                      </Text>
                    </Flex>
                  </Box>
                  <Box w="30%">
                    <Flex direction="column" gap="sm">
                      <Text size="24px" className="detailsText">
                        Date
                      </Text>
                      <Text size="24px" c="#00000080" className="detailsText">
                        {sosItem.date}
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
        <Flex direction="column">
          <Box bg="#FFFFFF" mb="md" style={{ borderRadius: "5px" }}>
            <SosGoogleMap coordinates={sosItem.coordinates} />
          </Box>
        </Flex>
      </Paper>
      {sosItem.status === "new" && (
        <Box m="sm">
          <SosModal />
        </Box>
      )}
    </Paper>
  );
}
