import { Flex, Box, Stack, Text, Link as ChakraLink, Icon } from "@chakra-ui/react";
import { ElementType } from "react";
import { ActiveLink } from "../ActiveLink";

export function NavLink({ icon, children, href, ...rest }) {
  return (
    <ActiveLink href={href} passHref>
      <ChakraLink display="flex" {...rest} _hover={{color: "yellow.300"}}>
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight="medium">
          {children}
        </Text>
      </ChakraLink>
    </ActiveLink>
  );
}