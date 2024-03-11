import React, { useState } from "react";
import mockDatabase from "../mockDatabase";
import { Box, Button, Center, Container, Flex, FormControl, FormLabel, Heading, Input, Link, Stack, Text, useToast, VStack } from "@chakra-ui/react";
import { FaUser, FaLock, FaWrench, FaBolt, FaWater, FaRocket } from "react-icons/fa";

import { IconButton } from "@chakra-ui/react";
import { FaInfo } from "react-icons/fa";

const Index = () => {
  const navBar = (
    <Flex justifyContent="space-between" alignItems="center" mb={4}>
      <IconButton icon={<FaInfo />} aria-label="Information" colorScheme="blue" onClick={() => alert("Information will be provided here.")} />
    </Flex>
  );
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const toast = useToast();

  const handleLogin = () => {
    // This function will now check against the mock database for login credentials
    const emailInput = document.getElementById("email").value;
    const passwordInput = document.getElementById("password").value;

    if (mockDatabase.users["Admin"] && mockDatabase.users["Admin"].password === passwordInput) {
      setIsLoggedIn(true);
      toast({
        title: "Login Success.",
        description: "You've successfully logged in!",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Login Failed.",
        description: "Invalid email or password.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
    setIsLoggedIn(true);
    toast({
      title: "Login Success.",
      description: "You've successfully logged in!",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    toast({
      title: "Logout Success.",
      description: "You've successfully logged out!",
      status: "info",
      duration: 5000,
      isClosable: true,
    });
  };

  const ServiceButton = ({ icon, label }) => {
    return (
      <Button leftIcon={icon} colorScheme="teal" variant="solid" width="full">
        {label}
      </Button>
    );
  };

  return (
    <Container maxW="container.xl" p={4}>
      {navBar}
      {!isLoggedIn ? (
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"}>Sign in to your account</Heading>
            <Text fontSize={"lg"} color={"gray.600"}>
              to enjoy all of our cool <Link color={"blue.400"}>services</Link> ✌️
            </Text>
          </Stack>
          <Box rounded={"lg"} bg={"white"} boxShadow={"lg"} p={8}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="email" />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" />
              </FormControl>
              <Stack spacing={10}>
                <Button
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                  onClick={handleLogin}
                >
                  Sign in
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={"center"}>
                  Not a user? <Link color={"blue.400"}>Register</Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      ) : (
        <VStack spacing={4} align="stretch">
          <Flex justifyContent="space-between" alignItems="center">
            <Heading>Welcome back!</Heading>
            <Button onClick={handleLogout} colorScheme="red">
              Logout
            </Button>
          </Flex>
          <Center>
            <Heading size="lg">Select Your Professional</Heading>
          </Center>
          <Stack direction={{ base: "column", md: "row" }} spacing={4}>
            <ServiceButton icon={<FaWrench />} label="Mechanic" />
            <ServiceButton icon={<FaBolt />} label="Electric" />
            <ServiceButton icon={<FaWater />} label="Plumber" />
            <ServiceButton icon={<FaRocket />} label="Express Service" />
          </Stack>
        </VStack>
      )}
    </Container>
  );
};

export default Index;
