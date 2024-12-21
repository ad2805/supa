import { Button, Text, Group, Flex, PinInput } from "@mantine/core";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authService } from "../../services/AuthService/service";
import "./LoginPage.css";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

// import indiaFlag from '../../assets/icons/inindiaflag_111950.png'
// import storydekLogo from '../../assets/logo/image 2.png'

export function LoginPage() {
  const navigate = useNavigate();
  const [isSubmited, setIsSubmited] = useState(false);
  // const [phone, setPhone] = useState("");
  const [value, setValue] = useState();

  useEffect(() => {
    if (isSubmited) {
      authService().then((data) => {
        console.log(data);
        // localStorage.setItem('token', data.token);
      });
    }
  }, [isSubmited]);

  function onFormSubmission(e) {
    e.preventDefault();
    setIsSubmited(true);
    navigate("/main-page/dashboard");
    setTimeout(() => {
      navigate("/main-page/dashboard");
    }, 200);
  }

  return (
    <Group
      h="100vh"
      w="100%"
      justify="space-between"
      className="login-page-container"
    >
      {/* Left Section */}
      <Group
        h="100%"
        w="60%"
        bg="#182452"
        justify="center"
        className="left-section"
      >
        <Flex direction="column" justify="center" align="center" gap="md">
          <Text size="96px" c="white">
            WELCOME
          </Text>
          {/* <Text size='36px' c='white'>STORYDEK</Text> */}
        </Flex>
        {/* <Image src={storydekLogo} h='150px' w='150px' /> */}
      </Group>

      {/* Right Section */}
      <Flex
        direction="column"
        justify="center"
        align="center"
        h="100%"
        w="38%"
        gap="xl"
        className="right-section"
      >
        <Text size="28px" fw="bolder">
          Login
        </Text>
        <Group justify="center">
          {/* <Image src={indiaFlag} h='30px' w='50px' /> */}
          {/* <TextInput */}
          <PhoneInput
            placeholder="Enter phone number"
            defaultCountry="IN"
            onChange={setValue}
          />
          <Button bg="#182452">Send OTP</Button>
        </Group>
        <Flex direction="column" align="flex-start" w="69%" gap="xl">
          <Text size="20px">Enter the 4 digit code</Text>
          <Group justify="center" w="100%">
            <PinInput oneTimeCode size="xl" length={4} type="number" gap="xl" />
          </Group>
        </Flex>
        <Flex direction="column" align="center" gap="sm">
          <a href="#">Didn't receive the OTP?</a>
          <a href="#">Resend OTP</a>
        </Flex>
        <Button w="69%" bg="#182452" onClick={onFormSubmission}>
          Login
        </Button>
      </Flex>
    </Group>
  );
}
