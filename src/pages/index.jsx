/* eslint-disable jsx-a11y/alt-text */
import {
  Flex,
  Box,
  Button,
  Heading,
  Text,
  Stack,
  AspectRatio,
  SimpleGrid,
  Image,
  Divider,
  IconButton,
  Highlight,
  useTheme,
} from "@chakra-ui/react";

import { FaLinkedin, FaYoutube } from "react-icons/fa";

import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { CardProfile } from "../components/CardProfile/CardProfile";
import Footer from "../components/Footer";
import { TechSection } from "../components/TechSection";
import { ProjectsSection } from "../components/ProjectsSection";

export default function Home() {
  const theme = useTheme();

  return (
    <>
      {/* //!Profile Section */}
      <Flex direction="column" h="100vh">
        <Header />

        <Sidebar />

        <Flex
          as="section"
          justify="center"
          h={`calc(100vh - 60px)`}
          // bg={`linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.647)),url('/images/boyCoding.jpg')`}
          // bg={`radial-gradient(rgba(0, 0, 0, 0.9), ${theme.colors.gray[600]}),url('/images/boyCoding.jpg')`}
          // bg={`radial-gradient(circle at center, ${theme.colors.gray[900]}, transparent), url('/images/boyCoding.jpg')`}
          // bg={`radial-gradient(circle at center, rgba(0, 0, 0, 0.891), ${theme.colors.gray[900]}), url('/images/boyCoding.jpg')`}
          backgroundPosition="80% center"
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
        >
          <CardProfile />
        </Flex>
      </Flex>

      <ProjectsSection />

      <TechSection />

      {/* //!Content creator*/}
      <Flex as="section" h="100vh" justify="center">
        <Stack px="4" spacing="">
          <Heading
            as="h1"
            id="projects"
            mt="16"
            textAlign="center"
            borderBottom="4px solid"
            borderColor="#FFE13B"
          >
            Content Creation
            {/* <span>💛</span> */}
          </Heading>{" "}
          <Text textAlign="center" color="gray.200">
            <Text>
              I make videos to teach people how to rebuild and redefine
              fundamental programming concepts on Youtube
            </Text>

            <IconButton
              variant="filled"
              color="#F5423E"
              aria-label="See menu"
              icon={<FaYoutube size="sm" />}
            />
          </Text>
          {/* //!Video do youtube */}
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
              // maxW="920px"
              // maxH="450px"
              minH="30vh"
              maxH="78vh"
              ratio="2"
            >
              <iframe
                width="804"
                height="452"
                src="https://www.youtube.com/embed/jnd-BnjiujU?list=PLbVhk8EESZtbuUeopDQS79mqZw44WDrwf"
                title="ES6+ Manipulando de Array - Map"
                // frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </AspectRatio>
          </Box>
          {/* //!END Video do youtube */}
          <Text px="4" textAlign="center" textColor="gray.200">
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
          {/* //!Botões de interação */}
          {/* <Flex spacing="4">
            <Flex
              flex="1"
              gap="4"
              justify="center"
              alignItems="center"
              flexWrap="wrap"
              py="8"
            >
              <HStack
                justify="space-between"
                flexWrap="wrap"
                sx={{
                  "& > button": {
                    minW: "136px",
                    miax: "150px",
                  },
                }}
              >
                <Button
                  flex="1"
                  variant="outline"
                  color="#FFE13B"
                  size="lg"
                  leftIcon={<BiLike />}
                >
                  Like
                </Button>
                <Button
                  flex="1"
                  variant="outline"
                  color="#FFE13B"
                  size="lg"
                  leftIcon={<BiChat />}
                >
                  Comment
                </Button>
                <Button
                  flex="1"
                  variant="outline"
                  color="#FFE13B"
                  size="lg"
                  leftIcon={<BiShare />}
                >
                  Share
                </Button>
              </HStack>
            </Flex>
          </Flex> */}
          {/* //!END Botões de interação */}
        </Stack>
      </Flex>

      <Divider />

      <Footer />
    </>
  );
}
