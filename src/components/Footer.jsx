import {
  Box,
  Flex,
  Text,
} from "@chakra-ui/react";

import { Logo } from "./Header/Logo";

export default function Footer() {
  const currentDate = new Date().getFullYear();

  return (
    <Box py={10}>
      <Flex
        align="center"
        justify="center"
      >
        <Logo />
      </Flex>
      <Text pt={6} fontSize={"sm"} textAlign="center">
        Helton Quintãns | All rights reserved | © {currentDate}
      </Text>
    </Box>
  );
}
