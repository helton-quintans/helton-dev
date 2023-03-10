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
  IconButton,
  Highlight,
  AvatarBadge,
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
  SiYoutube,
  SiLinkedin,
  SiInstagram,
} from "react-icons/si";
import { GiBrazilFlag } from "react-icons/gi";
import { FaDev } from "react-icons/fa";

import { FaGithub, FaNodeJs, FaReact } from "react-icons/fa";
import { DiMysql } from "react-icons/di";

import { Profile } from "../Header/Profile";

export function CardProfile() {
  return (
    <Card maxW={["sm", "lg"]} variant="gost">
      <CardBody px="4">
        <Flex justify="center">
          <Avatar
            id="avatarHome"
            size="2xl"
            name="Helton Quintãns"
            src="https://github.com/helton-quintans.png"
            alt="Autor do portfólio segurando um microfone"
          >
            {" "}
            <AvatarBadge boxSize="0.7em" bg="transparent">
              <Icon
                as={FaDev}
                fontSize={20}
                textColor="#FFE13B"
                color="gray.900"
              />
            </AvatarBadge>
          </Avatar>
        </Flex>

        <Stack mt="6" spacing="3">
          <Heading size={["2xl", "lg"]} textAlign="center" textColor="gray.200">
            {" "}
            Hi, my name is{" "}
            <Text
              as="span"
              // borderBottom="4px solid"
              borderColor="telegram.500"
              color="#FFE13B"
            >
              Helton Quintãns
            </Text>{" "}
            <span role="img" aria-label="hand">
              👋🏻
            </span>
          </Heading>

          <Skeleton
            justify="flex-end"
            startColor="pink.900"
            endColor="#FFE13B"
            height="2px"
          />

          <Flex justify="center">
            <Heading size={["4xl", "xl"]} fontWeight="700" textAlign="center">
              <Text as="span" textColor="gray.50">
                I work with{" "}
                <Text as="span" color="telegram.500">
                  React
                </Text>{" "}
                Ecosystem.
              </Text>{" "}
              <Center color="telegram.500">
                <SiReact fontSize={50} />
              </Center>
            </Heading>
          </Flex>
          <Skeleton
            justify="flex-end"
            startColor="pink.900"
            endColor="#FFE13B"
            height="2px"
          />

          <Text px="4" textAlign="center" textColor="gray.200">
            <Highlight
              query={["modern applications"]}
              styles={{ px: "2", py: "1", rounded: "full", bg: "#FFE13B" }}
            >
              Specialize in UI/UX design and responsive web design, i develop
              and test high-end modern applications.
            </Highlight>
          </Text>

          <Center textColor="gray.200">
            <span role="img" aria-label="flagBrazil">
              from Brazil 🇧🇷
            </span>
          </Center>
        </Stack>
      </CardBody>
      <CardFooter justify="center" p="0">
        <ButtonGroup spacing="8">
          <IconButton
            variant="outline"
            color="#FFE13B"
            size="lg"
            icon={<SiGithub />}
          />
          <IconButton
            variant="outline"
            color="#FFE13B"
            size="lg"
            icon={<SiLinkedin />}
          />
          <IconButton
            variant="outline"
            color="#FFE13B"
            size="lg"
            icon={<SiYoutube />}
          />
          <IconButton
            variant="outline"
            color="#FFE13B"
            size="lg"
            icon={<SiInstagram />}
          />
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}
