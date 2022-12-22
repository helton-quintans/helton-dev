import {
  Flex,
  Avatar,
  Box,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Stack,
  AspectRatio,
  Center,
  SimpleGrid,
  Grid,
  GridItem,
  StackItem,
  Tooltip,
  HStack,
  Image,
  Divider,
  Spacer,
  Card,
  CardBody,
  ButtonGroup,
  CardFooter,
  CardHeader,
  IconButton,
  Highlight,
  Icon,
} from "@chakra-ui/react";
import {
  SiCss3,
  SiFigma,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiPuppeteer,
  SiSass,
  SiStyledcomponents,
  SiTailwindcss,
  SiTypescript,
  SiChakraui,
  SiDocker,
  SiNextdotjs,
  SiLinux,
  SiReact,
  SiMongodb,
  SiGit,
  SiGithub,
  SiGitlab,
  SiNodedotjs,
  SiCypress,
} from "react-icons/si";
import {
  FaGithub,
  FaLinkedin,
  FaNodeJs,
  FaReact,
  FaYoutube,
} from "react-icons/fa";
import { BiLike, BiChat, BiShare } from "react-icons/bi";
import { IoMdMicrophone } from "react-icons/io";
import { DiMysql } from "react-icons/di";

import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { CardProfile } from "../components/Cards/CardProfile";

export default function Home() {
  return (
    <>
      {/* //!Profile Section */}
      <Flex direction="column" h="100vh">
        <Header />

        <Sidebar />

        <Flex as="section" justify="center">
          <CardProfile />
        </Flex>
      </Flex>

      <Divider />

      {/* //!Content creator*/}
      <Flex as="section" h="100%" justify="center">
        <Stack px="4">
          <Heading
            as="h1"
            mt="10"
            size={["2xl", "2xl"]}
            textAlign="center"
            textColor="gray.50"
            // borderBottom="4px solid"
            // borderColor="#FFE13B"
          >
            Content creation <Icon as={IoMdMicrophone} color="#FFE13B" />
            {/* <span>💛</span> */}
          </Heading>{" "}
          <Skeleton
            justify="flex-end"
            startColor="pink.900"
            endColor="#FFE13B"
            height="2px"
          />
          <Text textAlign="center" py="4" color="gray.200">
            <Highlight
              query={["videos", "fundamental programming concepts"]}
              styles={{ px: "2", py: "1", rounded: "full", bg: "#FFE13B" }}
            >
              I make videos to teach people how to rebuild and redefine
              fundamental programming concepts on Youtube
            </Highlight>{" "}
            <IconButton
              variant="filled"
              color="#F5423E"
              aria-label="See menu"
              icon={<FaYoutube size="sm" />}
            />
          </Text>
          <Box
            border={["1px solid", "0px"]}
            borderRadius="8"
            boxShadow="dark-lg"
            align="center"
            p="2"
            justifyItems="center"
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

          <Flex spacing="4">
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
          </Flex>
          <Divider />
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
          <SimpleGrid minChildWidth="380px" spacing="2">
            <Box maxH="400px">
              <object
                type="application/pdf"
                data="/documento.pdf"
                width="380px"
                height="420px"
              />
            </Box>
            <Box maxH="400px">
              <object
                type="application/pdf"
                data="/sessionStorage-LocaSotorage-cookies.pdf"
                width="380px"
                height="420px"
              />
            </Box>
          </SimpleGrid>
          <Flex spacing="4">
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
          </Flex>
        </Stack>
      </Flex>
      {/* //!END Content creator*/}

      {/* <Divider /> */}

      {/* <Flex as="section" direction="column" h="100vh" justify="center">
        <Heading
          as="h1"
          // mt="10"
          textAlign="center"
          borderBottom="4px solid"
          borderColor="#FFE13B"
        >
          In love with Javascript <span>💛</span>
        </Heading>{" "}
        <Text textAlign="center" px="4">
          I make videos to teach people how to rebuild and redefine fundamental
          programming concepts.
        </Text>
      </Flex>
      <Skeleton
        justify="flex-end"
        startColor="pink.700"
        endColor="#FFE13B"
        height="4px"
      /> */}
      {/* //!END Content section 3*/}

      {/* <Flex as="section" direction="column" h="100vh" justify="center">
        <Heading
          as="h1"
          // mt="10"
          textAlign="center"
          borderBottom="4px solid"
          borderColor="#FFE13B"
        >
          In love with Javascript <span>💛</span>
        </Heading>{" "}
        <Text textAlign="center">
          I make videos to teach people how to rebuild and redefine fundamental
          programming concepts.
        </Text>
      </Flex>
      <Skeleton
        justify="flex-end"
        startColor="pink.700"
        endColor="#FFE13B"
        height="4px"
      /> */}
      {/* //!END Content section 4*/}
    </>
  );
}
