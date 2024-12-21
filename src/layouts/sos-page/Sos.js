import { Paper, Text } from "@mantine/core";
import React from "react";
import SosList from "../../layout-components/Sos-components/SosList/SosList";

export default function Sos() {
  return (
    <Paper m="5px" pt="xs" bg="transparent">
      <Text size="24px" m="md">
        SOS
      </Text>
      <Paper mt="lg" p="md" bg="#FFFFFF80">
        <SosList />
      </Paper>
    </Paper>
  );
}
