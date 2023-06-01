import { Box, Button, Divider, Flex, Image, Text } from "@chakra-ui/react";

export const ProjectCard = ({ title, imageSrc, description, children }) => (
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

        {children}

        <Divider />
      </Box>
    </Box>
  </Flex>
);
