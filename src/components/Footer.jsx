import { Image } from "@chakra-ui/react";

import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Center,
  Divider,
  Flex,
  Heading,
  IconButton,
  Link,
  List,
  ListIcon,
  ListItem,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import { FC, memo, PropsWithChildren } from "react";
import { MdCheckCircle } from "react-icons/md";
import { SlGraduation } from "react-icons/sl";

import { Header } from "./Header";

import { MdOutlineFileDownload } from "react-icons/md";
import { Logo } from "./Header/Logo";

export default function Footer() {
  const currentDate = new Date().getFullYear();

  return (
    <Box py={10}>
      <Flex
        align={"center"}
        justify="center"
        // _before={{
        //   content: '""',
        //   borderBottom: "1px solid",
        //   borderColor: "gray.200",
        //   flexGrow: 1,
        //   mr: 8,
        // }}
        // _after={{
        //   content: '""',
        //   borderBottom: "1px solid",
        //   borderColor: "gray.200",
        //   flexGrow: 1,
        //   ml: 8,
        // }}
      >
        <Logo />
      </Flex>
      <Text pt={6} fontSize={"sm"} textAlign={"center"}>
        Helton Quintãns | All rights reserved | © {currentDate}
      </Text>
    </Box>
  );
}
