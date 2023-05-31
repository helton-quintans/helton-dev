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
import Footer from "../components/Footer";
import { TechBox } from "../components/TechBox";

export default function Home() {
  return (
    <>
      {/* //!Profile Section */}
      <Flex direction="column" h="100vh">
        <Header />

        <Sidebar />

        <Flex as="section" justify="center" h={`calc(100vh - 20px)`}>
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
                  🧠 Yan is an artificial intelligence that uses Machine
                  learning and NLP (natural language processing). 🌎 It is
                  multilingual and supports 40 languages natively and 104
                  languages through BERT integration. 👨‍🚀 Born with the purpose
                  of understanding customers intentions and providing a quick
                  and effective response, the more you talk to Yan, the more he
                  learns and improves the user experience. 🤘 This project has
                  the help of the open source community in Brazil and the world.
                </Text>
                <Button
                  color="#FFE13B"
                  my="4"
                  variant="outline"
                  size="md"
                  fontSize="20px"
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
                  The hq.news project is a blog where users can access the
                  content of each post according to their subscription status
                  through a Stripe payment system integration.
                </Text>
                <Button
                  color="#FFE13B"
                  my="4"
                  variant="outline"
                  size="md"
                  fontSize="20px"
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
                  Feed is an application like a social network where you can
                  like and comment on a third-party publication and was
                  developed with Next.js, Javascript, and Styled-Components and
                  other technologies.
                </Text>
                <Button
                  color="#FFE13B"
                  my="4"
                  variant="outline"
                  size="md"
                  fontSize="20px"
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
                  outputs. There is the possibility of adding, editing or
                  deleting transactions in addition to storing and persisting
                  data in local storage.
                </Text>
                <Button
                  color="#FFE13B"
                  my="4"
                  variant="outline"
                  size="md"
                  fontSize="20px"
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
                  outputs. There is the possibility of adding, editing or
                  deleting transactions in addition to storing and persisting
                  data in local storage.
                </Text>
                <Button
                  color="#FFE13B"
                  my="4"
                  variant="outline"
                  size="md"
                  fontSize="20px"
                >
                  See more
                </Button>
              </Box>
            </Box>
          </Box>
        </SimpleGrid>
      </Flex>

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
          <TechBox
            icon={<SiHtml5 size={80} />}
            title="HTML5"
            description="Markup language for the World Wide Web and is a key Internet
            technology, originally proposed by Opera Software. It is the
            fifth version of the HTML language."
          />
          <TechBox
            icon={<SiCss3 size={80} />}
            title="CSS"
            description="Cascading Style Sheets is a mechanism for adding style to a web document."
          />
          <TechBox
            icon={<SiJavascript size={80} />}
            title="JavaScript"
            description="JavaScript is a structured, multi-paradigm, weak dynamically typed, high-level scripting interpreted programming language."
          />
          <TechBox
            icon={<SiTypescript size={80} />}
            title="TypeScript"
            description="TypeScript is an open source programming language developed by Microsoft. It is a strict syntactic superset of JavaScript and adds optional static typing to the language."
          />

          <TechBox
            icon={<SiReact size={80} />}
            title="React"
            description="JavaScript library focused on creating user interfaces on web
            pages. It is maintained by Facebook."
          />

          <TechBox
            icon={<SiNextdotjs size={80} />}
            title="Next.js"
            description="Framework de desenvolvimento front-end React de código aberto criado pela Vercel que permite funcionalidades como renderização do lado do servidor e geração de sites estáticos para aplicativos da web baseados em React."
          />

          <TechBox
            icon={<SiNodedotjs size={80} />}
            title="Node"
            description="Um software de código aberto e multiplataforma, baseado no interpretador V8 do Google, que permite a execução de código JavaScript fora de um navegador da web."
          />

          <TechBox
            icon={
              <HStack>
                <SiGit size={80} />
                <SiGithub size={80} />
                <SiGitlab size={80} />
              </HStack>
            }
            title="Git, Github e Gitlab"
            description="Plataforma de hospedagem de arquivos e código-fonte com controle de versão usando Git. Ele permite que programadores, utilitários ou qualquer usuário registrado na plataforma contribua para projetos privados e/ou de código aberto de qualquer lugar do mundo."
          />

          <TechBox
            icon={<SiTailwindcss className="animate-pulse" size={80} />}
            title="TailwindCSS"
            description="Um framework CSS utility-first para construir rapidamente interfaces de usuário personalizadas."
          />

          <TechBox
            icon={<SiStyledcomponents className="animate-pulse" size={80} />}
            title="Styled Components"
            description="Uma biblioteca popular usada para estilizar aplicativos React. Ele permite que você construa componentes personalizados escrevendo CSS real em seu JavaScript."
          />

          <TechBox
            icon={<SiSass className="animate-pulse" size={80} />}
            title="Sass"
            description="Linguagem de folha de estilo inicialmente concebida por Hampton Catlin e desenvolvida por Natalie Weizenbaum."
          />

          <TechBox
            icon={<SiPuppeteer className="animate-pulse" size={80} />}
            title="Puppeteer"
            description="A Node.js library which provides a high-level API to control Chrome/Chromium over the DevTools Protocol."
          />

          <TechBox
            icon={<SiJest className="animate-pulse" size={80} />}
            title="Jest"
            description="A JavaScript testing framework built on top of Jasmine and maintained by Meta."
          />

          <TechBox
            icon={<SiMongodb className="animate-pulse" size={80} />}
            title="MongoDB"
            description="Open-source, cross-platform document-oriented database software written in the C++ language. Classified as a NoSQL database."
          />

          <TechBox
            icon={<DiMysql className="animate-pulse" size={80} />}
            title="MySQL"
            description="MySQL is a database management system, which uses the SQL language as an interface. It is currently one of Oracle Corporations most popular database management systems."
          />

          <TechBox
            icon={<SiLinux className="animate-pulse" size={80} />}
            title="Linux"
            description="Linux is a term popularly used to refer to operating systems or operating systems that use the Linux Kernel."
          />

          <TechBox
            icon={<SiDocker size={80} />}
            title="Docker"
            description="Docker is a set of platform-as-a-service products that use operating system-level virtualization to deliver software in packages called containers."
          />

          <TechBox
            icon={<SiFigma className="animate-pulse" size={80} />}
            title="Figma"
            description="Figma is a vector graphics editor and design project prototyping based primarily on the web browser."
          />

          <TechBox
            icon={<SiChakraui className="animate-pulse" size={80} />}
            title="Chakra UI"
            description="Modular and accessible component library that gives you the building blocks you need to build your React applications."
          />

          <TechBox
            icon={<SiCypress className="animate-pulse" size={80} />}
            title="Cypress"
            description="A purely JavaScript-based front-end testing tool built for the modern web. It aims to address the pain points developers or QA engineers face while testing an application."
          />
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
        </Stack>
      </Flex>
      {/* //!END Content creator*/}

      <Divider />
      {/* //!START Content comments */}
      <Footer />
    </>
  );
}
