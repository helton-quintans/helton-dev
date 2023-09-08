import { Image } from "@chakra-ui/react";

import {
  Center,
  Flex,
  Heading,

  Text,
} from "@chakra-ui/react";


import { Header } from "../components/Header";
import Footer from "../components/Footer";
import Head from "next/head";

export default function Blog() {
  return (
    <>
      <Head>
          <title>hqdev/Blog</title>
      </Head>
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
