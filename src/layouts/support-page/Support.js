import { Paper, Text } from "@mantine/core";
import React from "react";
import SupportTabs from "../../layout-components/support-components/SupportTabs/SupportTabs";

export default function () {
  return (
    <Paper m="5px"   pt="xs"bg="transparent">
      <Text size="24px" m="md">Support</Text>
      <Paper p="md" mih="90vh" bg="#FFFFFF80">
        <SupportTabs />
      </Paper>
    </Paper>
  );
}
