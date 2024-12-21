import React from "react";
import { Flex, Box, Text } from "@mantine/core";
export default function SupportChatBox({ messageList }) {
  return (
    <Flex pl="5px" mt="lg" mb="lg" direction="column" gap="md">
      {/* Display existing messages */}

      {messageList.map((msg, index) => (
        <Box
          bg="#EBEBEB"
          maw="60%"
          style={{
            marginRight: msg.sender === "user" ? "auto" : "unset",
            marginLeft: msg.sender === "support" ? "auto" : "unset",
            borderRadius: "10px",
          }}
        >
          <Box
            key={index}
            p="15px"
            style={{
              background: msg.sender === "user" ? "#EBEBEB" : "#FFFFFF80",
              borderRadius: "10px",
            }}
          >
            <Flex gap="sm" direction="column">
              <Text align="left" size="22px" style={{ fontWeight: "400" , lineHeight:"1.2" }} c="#00000080">
                {msg.text.split("\n").map((line, idx) => (
                  <span key={idx}>
                    {line}
                    <br />
                  </span>
                ))}
              </Text>
              <Text size="xs" c="#00000080">
                {new Date(msg.timestamp).toLocaleString()}
              </Text>
            </Flex>
          </Box>
        </Box>
      ))}
    </Flex>
  );
}
