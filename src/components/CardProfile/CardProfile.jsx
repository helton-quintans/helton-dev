import {
  Flex,
  Avatar,
  Heading,
  Text,
  Skeleton,
  Stack,
  Center,
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
  SiReact,
  SiGithub,
  SiYoutube,
  SiLinkedin,
  SiInstagram,
} from "react-icons/si";
import { FaDev } from "react-icons/fa";

export function CardProfile() {
  return (
    <Card
      maxW={["sm", "lg"]}
      variant="gost"
      h="100%"
      py={["0", "150"]}
      justify="center"
      alignItems="center"
    >
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
        <Stack spacing="4" mt="6" justifyContent={"center"}>
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
          <CardFooter justify="center">
            <ButtonGroup spacing="8">
              <IconButton
                variant="outline"
                color="#FFE13B"
                size="lg"
                icon={<SiGithub />}
                _hover={{
                  opacity: 0.7,
                  transform: "scale(1.2)",
                  transition: "all 0.2s ease-in-out",
                }}
              />
              <IconButton
                variant="outline"
                color="#FFE13B"
                size="lg"
                icon={<SiLinkedin />}
                _hover={{
                  opacity: 0.7,
                  transform: "scale(1.2)",
                  transition: "all 0.2s ease-in-out",
                }}
              />
              <IconButton
                variant="outline"
                color="#FFE13B"
                size="lg"
                icon={<SiYoutube />}
                _hover={{
                  opacity: 0.7,
                  transform: "scale(1.2)",
                  transition: "all 0.2s ease-in-out",
                }}
              />
              <IconButton
                variant="outline"
                color="#FFE13B"
                size="lg"
                icon={<SiInstagram />}
                _hover={{
                  opacity: 0.7,
                  transform: "scale(1.2)",
                  transition: "all 0.2s ease-in-out",
                }}
              />
            </ButtonGroup>
          </CardFooter>
        </Stack>
      </CardBody>
    </Card>
  );
}
