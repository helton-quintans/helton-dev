import { Box, Button, Divider, Flex, Image, Text } from "@chakra-ui/react";

export const ProjectCard = ({ title, imageSrc, description }) => (
  <Flex p="4">
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
        {title}
      </Text>

      <Flex justifyContent={"center"} alignItems="center">
        <Image src={imageSrc} maxH="600px" />
      </Flex>

      <Box
        size="md"
        d="flex"
        alignItems="center"
        flexDir="column"
        textAlign="center"
        borderRadius="8"
        p="4"
        px="12"
      >
        <Text
          noOfLines={3}
          textAlign="center"
          px={["0", "0", "24"]}
          maxW="1020px"
        >
          {description}
        </Text>
        <Button
          color="#FFE13B"
          my="4"
          variant="outline"
          size="md"
          fontSize="20px"
          _hover={{
            opacity: 0.7,
            transform: "scale(1.2)",
            transition: "all 0.2s ease-in-out",
          }}
        >
          See more
        </Button>
        <Divider />
      </Box>
    </Box>
  </Flex>
);
