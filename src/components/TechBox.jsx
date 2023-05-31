import { Box, Stack, Text } from "@chakra-ui/react";

export function TechBox({ icon, title, description }) {
  return (
    <Box
      boxShadow="dark-lg"
      borderRadius="8"
      border="1px solid "
      borderColor="#FFE13B"
      w="100%"
      h="100%"
      size="sm"
    >
      <Stack alignItems="center" textAlign="center" p="8">
        {icon}
        <Text
          fontWeight="medium"
          color="#FFE13B"
          fontSize="24px"
          translate="no"
        >
          {title}
        </Text>
        <Text fontSize="16px">{description}</Text>
      </Stack>
    </Box>
  );
}
