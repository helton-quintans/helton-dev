/* eslint-disable jsx-a11y/alt-text */
import {
  AspectRatio,
  Box,
  Divider,
  Flex,
  Heading,
  Highlight,
  IconButton,
  Stack,
  Text,
  useTheme
} from "@chakra-ui/react";

import { FaLinkedin } from "react-icons/fa";

import { CardProfile } from "../components/CardProfile/CardProfile";
import Footer from "../components/Footer";
import { Header } from "../components/Header";
import { ProjectsSection } from "../components/ProjectsSection";
import { Sidebar } from "../components/Sidebar";
import { TechSection } from "../components/TechSection";
import Head from "next/head";

export default function Home() {

  return (
    <>
    <Head>
        <title>hqdev/Portfolio</title>
    </Head>

        <Header />

        <Sidebar />

        <CardProfile />

        <ProjectsSection />

        <TechSection />

      {/* //!Content creator*/}
        <Flex 
          as="section" 
          mb="12"  
          direction="column"
          h="100%"
          justify="center"
          alignItems={"center"}>
          {/* <Stack px="4" > */}
            <Heading
              as="h1"
              id="content-creation"
              mt="10"
              textAlign="center"
              borderBottom="4px solid"
              borderColor="#FFE13B"
            >
              Content Creation
              <span>💛</span>
            </Heading>{" "}
            <Text textAlign="center" mt="4" px="4">
                I make videos to teach people how to rebuild and redefine
                fundamental programming concepts on Youtube
            </Text>
            <Box
              border={["1px solid", "0px"]}
              borderRadius="8"
              boxShadow="dark-lg"
              align="center"
              p="2"
              justifyItems="center"
              mt="4"
            >
              <AspectRatio
                justifyContent="center"
                ratio="2"
                w={['320px', "420px", "1040px"]}
                h={['180px', "auto"]}
              >
                <iframe
                  src="https://www.youtube.com/embed/jnd-BnjiujU?list=PLbVhk8EESZtbuUeopDQS79mqZw44WDrwf"
                  title="ES6+ Manipulando de Array - Map"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  
                />
              </AspectRatio>
            </Box>
            <Text px="4" textAlign="center" textColor="gray.200" mt="4">
              <Highlight
                query={["100k"]}
                styles={{ px: "2", py: "1", rounded: "full", bg: "#FFE13B" }}
              >
                My posts have reached over 100K impressions per week on Linkedin
              </Highlight>{" "}
              <IconButton
                variant="filled"
                color="blue.600"
                aria-label="See menu"
                icon={<FaLinkedin size="sm" />}
              />{" "}
            </Text>
          {/* </Stack> */}
        </Flex>

      <Divider />

      <Footer />
    </>
  );
}
