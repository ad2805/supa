import { Paper, Text, Flex } from "@mantine/core";
import React from "react";
import OperationalInsightsEfficiency from "../../../layout-components/Insights-components/OperationalInsights-components/OperationalInsightsEfficiency/OperationalInsightsEfficiency";
import OperationalInsightDTE from "./../../../layout-components/Insights-components/OperationalInsights-components/OperationalInsightDTE/OperationalInsightDTE";
import OperationalSpeedBattery from "../../../layout-components/Insights-components/OperationalInsights-components/OperationalSpeedBattery/OperationalSpeedBattery";
import OperationalRotations from "../../../layout-components/Insights-components/OperationalInsights-components/OperationalRotations/OperationalRotations";
import OperationalOdometer from "./../../../layout-components/Insights-components/OperationalInsights-components/OperationalOdometer/OperationalOdometer";
import OperationalGender from "./../../../layout-components/Insights-components/OperationalInsights-components/OperationalGender/OperationalGender";
import "./OperationalInsight.css"
export default function OperationalInsight() {
  const marks = [
    { value: 0, label: "xs" },
    { value: 25, label: "sm" },
    { value: 50, label: "md" },
    { value: 75, label: "lg" },
    { value: 100, label: "xl" },
  ];
  return (
    <Paper bg="transparent" m="5px">
      <Text size="24px" mt="30px" ml="md">
        Operational Insights
      </Text>
      <Paper bg="#FFFFFF80" mt="lg" p="lg">
        <Flex gap="lg" className="InsightsFlex">
          <Paper w="50%" bg="#EBEBEB" className="InsightsBox">
            <Text size="24px" m="md">
              Efficiency
            </Text>
            <Paper m="md" bg="#FFFFFF">
              <OperationalInsightsEfficiency />
            </Paper>
          </Paper>
          <Paper w="50%" bg="#EBEBEB" className="InsightsBox">
            <Text size="24px" m="md">
              DTE
            </Text>
            <Paper m="md" bg="#FFFFFF">
              <OperationalInsightDTE />
            </Paper>
          </Paper>
        </Flex>
        <Flex gap="lg" mt="lg" className="InsightsFlex">
          <Paper w="50%" bg="#EBEBEB" className="InsightsBox">
            <Text size="24px" m="md">
              Rotations vs Speed
            </Text>
            <Paper m="md" bg="#FFFFFF">
              <OperationalRotations />
            </Paper>
          </Paper>
          <Paper w="50%" bg="#EBEBEB" className="InsightsBox">
            <Text size="24px" m="md">
              Speed Based on Battery Interval
            </Text>
            <Paper m="md" bg="#FFFFFF">
              <OperationalSpeedBattery />
            </Paper>
          </Paper>
        </Flex>
        <Flex gap="lg" mt="lg" className="InsightsFlex">
          <Paper w="50%" bg="#EBEBEB" className="InsightsBox">
            <Text size="24px" m="md">
              Speed Based on Gender
            </Text>
            <Paper m="md" bg="#FFFFFF">
              <OperationalGender />
            </Paper>
          </Paper>
          <Paper w="50%" bg="#EBEBEB" className="InsightsBox">
            <Text size="24px" m="md">
              Odometer Aggregation
            </Text>
            <Paper m="md" bg="#FFFFFF">
              <OperationalOdometer />
            </Paper>
          </Paper>
        </Flex>
      </Paper>
    </Paper>
  );
}
