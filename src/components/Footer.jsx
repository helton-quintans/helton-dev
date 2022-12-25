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
  return (
    <Box py={6}>
      <Flex align={"center"} justify="center">
        <Logo />
      </Flex>
      <Text pt={6} fontSize={"sm"} textAlign={"center"}>
        Helton Quintãns | All rights reserved | © 2022
      </Text>
    </Box>
  );
}
