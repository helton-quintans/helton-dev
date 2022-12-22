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

import { Header } from "../components/Header";

import { MdOutlineFileDownload } from "react-icons/md";
import Footer from "../components/Footer";

export default function Blog() {
  return (
    <>
      <Header />
      <Flex as="section" direction="column" h="100%" justify="center">
        <Heading
          as="h1"
          id="projects"
          mt="10"
          textAlign="center"
          borderBottom="4px solid"
          borderColor="#FFE13B"
        >
          Blog
          {/* <span>💛</span> */}
        </Heading>{" "}
        <Text textAlign="center" px="4" mt="2">
          coming soon
        </Text>
      </Flex>
      <Center size="sm" mt="8">
        <Image maxW="350px" maxH="190px" src="/svg/construction.svg" />
      </Center>

      <Footer />
    </>
  );
}
