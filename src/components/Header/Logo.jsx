import { Text } from "@chakra-ui/react";

export function Logo() {
  return (
    <Text
      fontSize={["2xl", "3xl"]}
      fontWeight="bold"
      my="5"
      letterSpacing="tight"
      align="center"
    >
      helton
      <Text as="span" color="#FFE13B" ml="1">
        .
      </Text>
      dev
    </Text>
  );
}
