/* eslint-disable jsx-a11y/alt-text */
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
  Link,
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
  SiWhatsapp,
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
import NextLink from "next/link";
import { useRouter } from "next/router";

import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { CardProfile } from "../components/Cards/CardProfile";
import Footer from "../components/Footer";

export default function Home() {
  const router = useRouter();
  return (
    <>
      {/* //!Profile Section */}
      <Header />

      <Flex direction="column" h="100vh">
        <Sidebar />

        <Flex as="section" justify="center" maxH="100%">
          <CardProfile />
        </Flex>
      </Flex>

      <Flex as="section" direction="column" h="100%" justify="center">
        <Heading
          as="h1"
          id="projects"
          mt="10"
          textAlign="center"
          borderBottom="4px solid"
          borderColor="#FFE13B"
        >
          Projects <span>💛</span>
        </Heading>{" "}
        <Text textAlign="center" px="4">
          Welcome to my projects
        </Text>
      </Flex>

      <SimpleGrid minChildWidth="320px" mt="10" gap={2}>
        <Box
          p="4"
          borderRadius="8"
          // border="1px solid"
          // borderColor="#FFE13B"
        >
          <Box
            d="flex"
            alignItems="center"
            flexDir="column"
            textAlign="center"
            size="md"
          >
            <Text
              as="h2"
              textAlign="center"
              color="#FFE13B"
              fontWeight="semibold"
              fontSize="32px"
              borderRadius="8"
              mb="4"
            >
              Dashgo
            </Text>
            <Image src="/images/dashgo.png" />

            <Box
              size="md"
              d="flex"
              alignItems="center"
              flexDir="column"
              textAlign="center"
              borderRadius="8"
              p="4"
            >
              <Text textAlign="center" noOfLines={3} px={["0", "0", "24"]}>
                DashGo is an application for dashboards in general with pages
                and pagination, login and user inclusion system made with
                Next.js, Typescript, React-query and other technologies.
              </Text>
              <Button
                color="#FFE13B"
                my="4"
                variant="outline"
                size="md"
                fontSize="20px"
                onClick={() =>
                  router.push("https://dashgo-henna.vercel.app/dashboard")
                }
              >
                See more
              </Button>
              <Divider />
            </Box>
          </Box>
        </Box>
      </SimpleGrid>
      <SimpleGrid minChildWidth="320px" gap={2}>
        <Box
          p="4"
          borderRadius="8"
          // border="1px solid"
          // borderColor="#FFE13B"
        >
          <Box
            d="flex"
            alignItems="center"
            flexDir="column"
            textAlign="center"
            size="md"
          >
            <Text
              as="h2"
              textAlign="center"
              color="#FFE13B"
              fontWeight="semibold"
              fontSize="32px"
              borderRadius="8"
              mb="4"
            >
              Yan Bot
            </Text>
            <Image src="/images/yanBot.png" />

            <Box
              size="md"
              d="flex"
              alignItems="center"
              flexDir="column"
              textAlign="center"
              borderRadius="8"
              p="4"
            >
              <Text noOfLines={3} textAlign="center" px={["0", "0", "24"]}>
                🧠 Yan is an artificial intelligence that uses Machine learning
                and NLP (natural language processing). 🌎 It is multilingual and
                supports 40 languages natively and 104 languages through BERT
                integration. 👨‍🚀 Born with the purpose of understanding customers
                intentions and providing a quick and effective response, the
                more you talk to Yan, the more he learns and improves the user
                experience. 🤘 This project has the help of the open source
                community in Brazil and the world.
              </Text>
              <Button
                color="#FFE13B"
                my="4"
                variant="outline"
                size="md"
                fontSize="20px"
                onClick={() =>
                  router.push("https://github.com/helton-quintans/yan-bot")
                }
              >
                See more
              </Button>
              <Divider />
            </Box>
          </Box>
        </Box>
      </SimpleGrid>
      <SimpleGrid minChildWidth="320px" gap={2}>
        <Box
          p="4"
          borderRadius="8"
          // border="1px solid"
          // borderColor="#FFE13B"
        >
          <Box
            d="flex"
            alignItems="center"
            flexDir="column"
            textAlign="center"
            size="md"
          >
            <Text
              as="h2"
              textAlign="center"
              color="#FFE13B"
              fontWeight="semibold"
              fontSize="32px"
              borderRadius="8"
              mb="4"
            >
              hq.news
            </Text>
            <Image src="/images/hqNews.png" />

            <Box
              size="md"
              d="flex"
              alignItems="center"
              flexDir="column"
              textAlign="center"
              borderRadius="8"
              p="4"
            >
              <Text noOfLines={3} textAlign="center" px={["0", "0", "24"]}>
                The hq.news project is a blog where users can access the content
                of each post according to their subscription status through a
                Stripe payment system integration.
              </Text>
              <Button
                color="#FFE13B"
                my="4"
                variant="outline"
                size="md"
                fontSize="20px"
                onClick={() =>
                  router.push("https://github.com/helton-quintans/hq-news")
                }
              >
                See more
              </Button>
              <Divider />
            </Box>
          </Box>
        </Box>
      </SimpleGrid>
      <SimpleGrid minChildWidth="320px" gap={2}>
        <Box
          p="4"
          borderRadius="8"
          // border="1px solid"
          // borderColor="#FFE13B"
        >
          <Box
            d="flex"
            alignItems="center"
            flexDir="column"
            textAlign="center"
            size="md"
          >
            <Text
              as="h2"
              textAlign="center"
              color="#FFE13B"
              fontWeight="semibold"
              fontSize="32px"
              borderRadius="8"
              mb="4"
            >
              Feed
            </Text>
            <Image src="/images/feed.png" />

            <Box
              size="md"
              d="flex"
              alignItems="center"
              flexDir="column"
              textAlign="center"
              borderRadius="8"
              p="4"
            >
              <Text noOfLines={3} textAlign="center" px={["0", "0", "24"]}>
                Feed is an application like a social network where you can like
                and comment on a third-party publication and was developed with
                Next.js, Javascript, and Styled-Components and other
                technologies.
              </Text>
              <Button
                color="#FFE13B"
                my="4"
                variant="outline"
                size="md"
                fontSize="20px"
                onClick={() => router.push("https://feed-omega.vercel.app/")}
              >
                See more
              </Button>
              <Divider />
            </Box>
          </Box>
        </Box>
      </SimpleGrid>
      <SimpleGrid minChildWidth="320px" gap={2}>
        <Box p="4" borderRadius="8">
          <Box
            d="flex"
            alignItems="center"
            flexDir="column"
            textAlign="center"
            size="md"
          >
            <Text
              as="h2"
              textAlign="center"
              color="#FFE13B"
              fontWeight="semibold"
              fontSize="32px"
              borderRadius="8"
              mb="4"
            >
              Watch.me
            </Text>
            <Image src="/images/watchMe.png" />

            <Box
              size="md"
              d="flex"
              alignItems="center"
              flexDir="column"
              textAlign="center"
              borderRadius="8"
              p="4"
            >
              <Text noOfLines={3} textAlign="center" px={["0", "0", "24"]}>
                Application that allows the user to have greater accuracy in
                personal financial control by recording financial inputs and
                outputs. There is the possibility of adding, editing or deleting
                transactions in addition to storing and persisting data in local
                storage.
              </Text>
              <Button
                color="#FFE13B"
                my="4"
                variant="outline"
                size="md"
                fontSize="20px"
                onClick={() =>
                  router.push("https://github.com/helton-quintans/watch.me")
                }
              >
                See more
              </Button>
              <Divider />
            </Box>
          </Box>
        </Box>
      </SimpleGrid>
      <SimpleGrid minChildWidth="320px" gap={2}>
        <Box
          p="4"
          borderRadius="8"
          // border="1px solid"
          // borderColor="#FFE13B"
        >
          <Box
            d="flex"
            alignItems="center"
            flexDir="column"
            textAlign="center"
            size="md"
          >
            <Text
              as="h2"
              textAlign="center"
              color="#FFE13B"
              fontWeight="semibold"
              fontSize="32px"
              borderRadius="8"
              mb="4"
            >
              B7Delivery
            </Text>
            <Image src="/images/delivery.png" />

            <Box
              size="md"
              d="flex"
              alignItems="center"
              flexDir="column"
              textAlign="center"
              borderRadius="8"
              p="4"
            >
              <Text noOfLines={3} textAlign="center" px={["0", "0", "24"]}>
                Multi-tenancy SaaS made with Typescript and Next.js. Delivery
                system for small and medium businesses where it is possible to
                place orders for registered restaurants.
              </Text>
              <Button
                color="#FFE13B"
                my="4"
                variant="outline"
                size="md"
                fontSize="20px"
                onClick={() =>
                  router.push("https://github.com/helton-quintans/b7delivery")
                }
              >
                See more
              </Button>
              <Divider />
            </Box>
          </Box>
        </Box>
      </SimpleGrid>
      <SimpleGrid minChildWidth="320px" gap={2}>
        <Box
          p="4"
          borderRadius="8"
          // border="1px solid"
          // borderColor="#FFE13B"
        >
          <Box
            d="flex"
            alignItems="center"
            flexDir="column"
            textAlign="center"
            size="md"
          >
            <Text
              as="h2"
              textAlign="center"
              color="#FFE13B"
              fontWeight="semibold"
              fontSize="32px"
              borderRadius="8"
              mb="4"
            >
              Rocketshoes
            </Text>
            <Image src="/images/rocketshoes.png" />

            <Box
              size="md"
              d="flex"
              alignItems="center"
              flexDir="column"
              textAlign="center"
              borderRadius="8"
              p="4"
            >
              <Text noOfLines={3} textAlign="center" px={["0", "0", "24"]}>
                This project was developed at the RocketSeat Ignite Bootcamp
                with the following technologies: ReactJS, Redux, Redux-Saga,
                React, Router, v4, Axios, Polished, React-Toastify,
                styled-components, React-Icons, react-loading-skeleton,
                react-loader-spinner, json-server and more.
              </Text>
              <Button
                color="#FFE13B"
                my="4"
                variant="outline"
                size="md"
                fontSize="20px"
                onClick={() => router.push("https://rocketshoes.netlify.app/")}
              >
                See more
              </Button>
              <Divider />
            </Box>
          </Box>
        </Box>
      </SimpleGrid>
      <SimpleGrid minChildWidth="320px" gap={2}>
        <Box p="4" borderRadius="8">
          <Box
            d="flex"
            alignItems="center"
            flexDir="column"
            textAlign="center"
            size="md"
          >
            <Text
              as="h2"
              textAlign="center"
              color="#FFE13B"
              fontWeight="semibold"
              fontSize="32px"
              borderRadius="8"
              mb="4"
            >
              Control of Expenses
            </Text>
            <Image src="/images/controleDeDespesas.png" />

            <Box
              size="md"
              d="flex"
              alignItems="center"
              flexDir="column"
              textAlign="center"
              borderRadius="8"
              p="4"
            >
              <Text noOfLines={3} textAlign="center" px={["0", "0", "24"]}>
                Application that allows the user to have greater accuracy in
                personal financial control by recording financial inputs and
                outputs. There is the possibility of adding, editing or deleting
                transactions in addition to storing and persisting data in local
                storage.
              </Text>
              <Button
                color="#FFE13B"
                my="4"
                variant="outline"
                size="md"
                fontSize="20px"
                onClick={() =>
                  router.push("https://competent-bardeen-548773.netlify.app/")
                }
              >
                See more
              </Button>
            </Box>
          </Box>
        </Box>
      </SimpleGrid>

      {/* //!TECHS */}
      <Flex as="section" direction="column" h="100%" justify="center">
        <Heading
          as="h1"
          id="projects"
          mt="10"
          textAlign="center"
          borderBottom="4px solid"
          borderColor="#FFE13B"
        >
          Techs
          {/* <span>💛</span> */}
        </Heading>{" "}
        <Text textAlign="center" px="4" mt="2">
          Main technologies I work currently.
        </Text>
      </Flex>

      <SimpleGrid as="section" gap={6} mt="20" px="6" minChildWidth="320px">
        <>
          <Box
            boxShadow="dark-lg"
            borderRadius="8"
            border="1px solid "
            borderColor="#FFE13B"
            w="100%"
            h="100%"
            size="sm"
            // variant={container}
            // initial="hidden"
            // animate="visible"
          >
            <Stack alignItems="center" textAlign="center" p="8">
              <SiHtml5 size={80} />
              <Text
                fontWeight="medium"
                color="#FFE13B"
                fontSize="24px"
                translate="no"
              >
                HTML5
              </Text>
              <Text fontSize="16px">
                Markup language for the World Wide Web and is a key Internet
                technology, originally proposed by Opera Software. It is the
                fifth version of the HTML language.
              </Text>
            </Stack>
          </Box>

          <Box
            boxShadow="dark-lg"
            borderRadius="8"
            border="1px solid "
            borderColor="#FFE13B"
            w="100%"
            h="100%"
          >
            <Stack
              bgColor="transparent"
              alignItems="center"
              textAlign="center"
              p="8"
            >
              <SiCss3 size={80} />
              <Text fontWeight="medium" color="#FFE13B" fontSize="24px">
                CSS
              </Text>
              <Text textAlign="center" fontSize="16px">
                Cascading Style Sheets is a mechanism for adding style to a web
                document.
              </Text>
            </Stack>
          </Box>

          <Box
            boxShadow="dark-lg"
            borderRadius="8"
            border="1px solid "
            borderColor="#FFE13B"
            w="100%"
            h="100%"
          >
            <Stack
              bgColor="transparent"
              alignItems="center"
              textAlign="center"
              p="8"
            >
              <SiJavascript size={80} />
              <Text
                fontWeight="medium"
                color="#FFE13B"
                fontSize="24px"
                translate="no"
              >
                JavaScript
              </Text>
              <Text textAlign="center" fontSize="16px">
                JavaScript is a structured, multi-paradigm, weak dynamically
                typed, high-level scripting interpreted programming language.
              </Text>
            </Stack>
          </Box>

          <Box
            boxShadow="dark-lg"
            borderRadius="8"
            border="1px solid "
            borderColor="#FFE13B"
            w="100%"
            h="100%"
          >
            <Stack
              bgColor="transparent"
              alignItems="center"
              textAlign="center"
              p="8"
            >
              <SiTypescript size={80} />

              <Text
                fontWeight="medium"
                color="#FFE13B"
                fontSize="24px"
                translate="no"
              >
                Typescript
              </Text>
              <Text textAlign="lefcentert" fontSize="16px">
                TypeScript is an open source programming language developed by
                Microsoft. It is a strict syntactic superset of JavaScript and
                adds optional static typing to the language.
              </Text>
            </Stack>
          </Box>

          <Box
            boxShadow="dark-lg"
            borderRadius="8"
            border="1px solid "
            borderColor="#FFE13B"
            w="100%"
            h="100%"
          >
            <Stack
              bgColor="transparent"
              alignItems="center"
              textAlign="center"
              p="8"
            >
              <SiReact size={80} />

              <Text
                fontWeight="medium"
                color="#FFE13B"
                fontSize="24px"
                translate="no"
              >
                React
              </Text>
              <Text textAlign="center" fontSize="16px">
                JavaScript library focused on creating user interfaces on web
                pages. It is maintained by Facebook.
              </Text>
            </Stack>
          </Box>

          <Box
            boxShadow="dark-lg"
            borderRadius="8"
            border="1px solid "
            borderColor="#FFE13B"
            w="100%"
            h="100%"
          >
            <Stack
              bgColor="transparent"
              alignItems="center"
              textAlign="center"
              p="8"
            >
              <SiNextdotjs size={80} />

              <Text
                fontWeight="medium"
                color="#FFE13B"
                fontSize="24px"
                translate="no"
              >
                Next.js
              </Text>
              <Text textAlign="center" fontSize="16px">
                Open source React front-end development web framework created by
                Vercel that enables functionality such as server-side rendering
                and static website generation for React-based web applications.
              </Text>
            </Stack>
          </Box>

          <Box
            boxShadow="dark-lg"
            borderRadius="8"
            border="1px solid "
            borderColor="#FFE13B"
            w="100%"
            h="100%"
          >
            <Stack
              bgColor="transparent"
              alignItems="center"
              textAlign="center"
              p="8"
            >
              <SiNodedotjs size={80} />

              <Text
                fontWeight="medium"
                color="#FFE13B"
                fontSize="24px"
                translate="no"
              >
                Node
              </Text>
              <Text textAlign="center" fontSize="16px">
                An open-source, cross-platform software, based on Googles V8
                interpreter, that allows the execution of JavaScript code
                outside of a web browser.
              </Text>
            </Stack>
          </Box>

          <Box
            boxShadow="dark-lg"
            borderRadius="8"
            border="1px solid "
            borderColor="#FFE13B"
            w="100%"
            h="100%"
          >
            <Stack
              bgColor="transparent"
              alignItems="center"
              textAlign="center"
              p="8"
            >
              <HStack>
                <SiGit size={80} />
                <SiGithub size={80} />
                <SiGitlab size={80} />
              </HStack>

              <Text fontWeight="medium" color="#FFE13B" fontSize="24px">
                Git, Github and Gitlab
              </Text>
              <Text textAlign="center" fontSize="16px">
                Source code and file hosting platform with version control using
                Git. It allows programmers, utilities or any user registered on
                the platform to contribute to private and/or Open Source
                projects from anywhere in the world.
              </Text>
            </Stack>
          </Box>

          <Box
            boxShadow="dark-lg"
            borderRadius="8"
            border="1px solid "
            borderColor="#FFE13B"
            w="100%"
            h="100%"
          >
            <Stack
              bgColor="transparent"
              alignItems="center"
              textAlign="center"
              p="8"
            >
              <SiTailwindcss className="animate-pulse" size={80} />

              <Text fontWeight="medium" color="#FFE13B" fontSize="24px">
                TailwindCSS
              </Text>
              <Text textAlign="center" fontSize="16px">
                A utility-first CSS framework for rapidly building custom user
                interfaces.
              </Text>
            </Stack>
          </Box>

          <Box
            boxShadow="dark-lg"
            borderRadius="8"
            border="1px solid "
            borderColor="#FFE13B"
            w="100%"
            h="100%"
          >
            <Stack
              bgColor="transparent"
              alignItems="center"
              textAlign="center"
              p="8"
            >
              <SiStyledcomponents className="animate-pulse" size={80} />

              <Text fontWeight="medium" color="#FFE13B" fontSize="24px">
                Styled Components
              </Text>
              <Text textAlign="center" fontSize="16px">
                A popular library that is used to style React applications. It
                allows you to build custom components by writing actual CSS in
                your JavaScript.
              </Text>
            </Stack>
          </Box>

          <Box
            boxShadow="dark-lg"
            borderRadius="8"
            border="1px solid "
            borderColor="#FFE13B"
            w="100%"
            h="100%"
          >
            <Stack
              bgColor="transparent"
              alignItems="center"
              textAlign="center"
              p="8"
            >
              <SiSass className="animate-pulse" size={80} />

              <Text fontWeight="medium" color="#FFE13B" fontSize="24px">
                Sass
              </Text>
              <Text textAlign="center" fontSize="16px">
                Stylesheet language initially conceived by Hampton Catlin and
                developed by Natalie Weizenbaum.
              </Text>
            </Stack>
          </Box>

          <Box
            boxShadow="dark-lg"
            borderRadius="8"
            border="1px solid "
            borderColor="#FFE13B"
            w="100%"
            h="100%"
          >
            <Stack
              bgColor="transparent"
              alignItems="center"
              textAlign="center"
              p="8"
            >
              <SiPuppeteer className="animate-pulse" size={80} />

              <Text fontWeight="medium" color="#FFE13B" fontSize="24px">
                Puppeteer
              </Text>
              <Text textAlign="center" fontSize="16px">
                A Node.js library which provides a high-level API to control
                Chrome/Chromium over the DevTools Protocol.
              </Text>
            </Stack>
          </Box>

          <Box
            boxShadow="dark-lg"
            borderRadius="8"
            border="1px solid "
            borderColor="#FFE13B"
            w="100%"
            h="100%"
          >
            <Stack
              bgColor="transparent"
              alignItems="center"
              textAlign="center"
              p="8"
            >
              <SiJest className="animate-pulse" size={80} />

              <Text
                fontWeight="medium"
                color="#FFE13B"
                fontSize="24px"
                translate="no"
              >
                Jest
              </Text>
              <Text textAlign="center" fontSize="16px">
                A JavaScript testing framework built on top of Jasmine and
                maintained by Meta.
              </Text>
            </Stack>
          </Box>

          <Box
            boxShadow="dark-lg"
            borderRadius="8"
            border="1px solid "
            borderColor="#FFE13B"
            w="100%"
            h="100%"
          >
            <Stack
              bgColor="transparent"
              alignItems="center"
              textAlign="center"
              p="8"
            >
              <SiMongodb className="animate-pulse" size={80} />

              <Text fontWeight="medium" color="#FFE13B" fontSize="24px">
                MongoDB
              </Text>
              <Text textAlign="center" fontSize="16px">
                Open-source, cross-platform document-oriented database software
                written in the C++ language. Classified as a NoSQL database
              </Text>
            </Stack>
          </Box>

          <Box
            boxShadow="dark-lg"
            borderRadius="8"
            border="1px solid "
            borderColor="#FFE13B"
            w="100%"
            h="100%"
          >
            <Stack
              bgColor="transparent"
              alignItems="center"
              textAlign="center"
              p="8"
            >
              <DiMysql className="animate-pulse" size={80} />

              <Text fontWeight="medium" color="#FFE13B" fontSize="24px">
                MySQL
              </Text>
              <Text textAlign="center" fontSize="16px">
                MySQL is a database management system, which uses the SQL
                language as an interface. It is currently one of Oracle
                Corporations most popular database management systems.
              </Text>
            </Stack>
          </Box>

          <Box
            boxShadow="dark-lg"
            borderRadius="8"
            border="1px solid "
            borderColor="#FFE13B"
            w="100%"
            h="100%"
          >
            <Stack
              bgColor="transparent"
              alignItems="center"
              textAlign="center"
              p="8"
            >
              <SiLinux className="animate-pulse" size={80} />

              <Text fontWeight="medium" color="#FFE13B" fontSize="24px">
                Linux
              </Text>
              <Text textAlign="center" fontSize="16px">
                Linux is a term popularly used to refer to operating systems or
                operating systems that use the Linux Kernel.
              </Text>
            </Stack>
          </Box>

          <Box
            boxShadow="dark-lg"
            borderRadius="8"
            border="1px solid "
            borderColor="#FFE13B"
            w="100%"
            h="100%"
          >
            <Stack
              bgColor="transparent"
              alignItems="center"
              textAlign="center"
              p="8"
            >
              <SiDocker size={80} />

              <Text
                fontWeight="medium"
                color="#FFE13B"
                fontSize="24px"
                translate="no"
              >
                Docker
              </Text>
              <Text textAlign="center" fontSize="16px">
                Docker is a set of platform-as-a-service products that use
                operating system-level virtualization to deliver software in
                packages called containers.
              </Text>
            </Stack>
          </Box>

          <Box
            boxShadow="dark-lg"
            borderRadius="8"
            border="1px solid "
            borderColor="#FFE13B"
            w="100%"
            h="100%"
          >
            <Stack
              bgColor="transparent"
              alignItems="center"
              textAlign="center"
              p="8"
            >
              <SiFigma className="animate-pulse" size={80} />

              <Text
                fontWeight="medium"
                color="#FFE13B"
                fontSize="24px"
                translate="no"
              >
                Figma
              </Text>
              <Text textAlign="center" fontSize="16px">
                Figma is a vector graphics editor and design project prototyping
                based primarily on the web browser.
              </Text>
            </Stack>
          </Box>

          <Box
            boxShadow="dark-lg"
            borderRadius="8"
            border="1px solid "
            borderColor="#FFE13B"
            w="100%"
            h="100%"
          >
            <Stack
              bgColor="transparent"
              alignItems="center"
              textAlign="center"
              p="8"
            >
              <SiChakraui className="animate-pulse" size={80} />

              <Text
                fontWeight="medium"
                color="#FFE13B"
                fontSize="24px"
                translate="no"
              >
                Chakra UI
              </Text>
              <Text textAlign="center" fontSize="16px">
                Modular and accessible component library that gives you the
                building blocks you need to build your React applications.
              </Text>
            </Stack>
          </Box>

          <Box
            boxShadow="dark-lg"
            borderRadius="8"
            border="1px solid "
            borderColor="#FFE13B"
            w="100%"
            h="100%"
          >
            <Stack
              bgColor="transparent"
              alignItems="center"
              textAlign="center"
              p="8"
            >
              <SiCypress className="animate-pulse" size={80} />

              <Text
                fontWeight="medium"
                color="#FFE13B"
                fontSize="24px"
                translate="no"
              >
                Cypress
              </Text>
              <Text textAlign="center" fontSize="16px">
                A purely JavaScript-based front-end testing tool built for the
                modern web. It aims to address the pain points developers or QA
                engineers face while testing an application.
              </Text>
            </Stack>
          </Box>
        </>
      </SimpleGrid>

      {/* <Divider /> */}

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
          <Divider />
        </Stack>
      </Flex>
      {/* //!END Content creator*/}

      <Divider />
      <Footer />
      <IconButton
        zIndex="2"
        ml="95%"
        mt="95%"
        position="fixed"
        aria-label="WhatsApp"
        icon={<SiWhatsapp />}
      />
    </>
  );
}
