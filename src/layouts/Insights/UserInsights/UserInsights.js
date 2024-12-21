import { Paper, Text, Flex } from "@mantine/core";
import React from "react";
import UserInsightFingerPrint from "../../../layout-components/Insights-components/UserInsight-components/UserInsightFingerPrint/UserInsightFingerPrint";
import UserInsightSpeed from "./../../../layout-components/Insights-components/UserInsight-components/UserInsightSpeed/UserInsightSpeed";
import UserInsightChargingStatus from "./../../../layout-components/Insights-components/UserInsight-components/UserInsightChargingStatus/UserInsightChargingStatus";
import UserInsightStatus from "./../../../layout-components/Insights-components/UserInsight-components/UserInsightStatus/UserInsightStatus";

export default function UserInsights() {
  return (
    <Paper bg="transparent" m="5px">
      <Text size="24px" mt="30px" ml="md">
        User Insights
      </Text>
      <Paper bg="#FFFFFF80" mt="lg" p="lg">
        <Flex gap="lg" className="InsightsFlex">
          <Paper w="50%" bg="#EBEBEB" className="InsightsBox">
            <Text size="24px" m="md">
              Finger Print
            </Text>
            <Paper m="md" bg="#FFFFFF">
              <UserInsightFingerPrint />
            </Paper>
          </Paper>
          <Paper w="50%" bg="#EBEBEB" className="InsightsBox">
            <Text size="24px" m="md">
              Speed
            </Text>
            <Paper m="md" bg="#FFFFFF">
              <UserInsightSpeed />
            </Paper>
          </Paper>
        </Flex>
        <Flex gap="lg" mt="lg" className="InsightsFlex">
          <Paper w="50%" bg="#EBEBEB" className="InsightsBox">
            <Text size="24px" m="md">
              Charging Status
            </Text>
            <Paper m="md" bg="#FFFFFF">
              <UserInsightChargingStatus />
            </Paper>
          </Paper>
          <Paper w="50%" bg="#EBEBEB" className="InsightsBox">
            <Text size="24px" m="md">
              Errors & Cruise Control
            </Text>
            <Paper m="md" bg="#FFFFFF">
              <UserInsightStatus />
            </Paper>
          </Paper>
        </Flex>
      </Paper>
    </Paper>
  );
}
