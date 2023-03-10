import {
  Flex,
  Drawer,
  Box,
  Stack,
  Text,
  Link,
  Icon,
  useBreakpointValue,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Divider,
} from "@chakra-ui/react";
import { useSidebarDrawer } from "../../contexts/SidebarDrawerContext";

import { SidebarNav } from "./SidebarNav";

export function Sidebar() {
  const { isOpen, onClose } = useSidebarDrawer();
  // const isDrawerSidebar = useBreakpointValue({
  //   base: true,
  //   lg: false,
  // });

  // if (isDrawerSidebar) {
  return (
    <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
      <DrawerOverlay>
        <DrawerContent bg="gray.800" p="4">
          <DrawerCloseButton mt="10" />
          <DrawerHeader mt="4">Navigation</DrawerHeader>

          <DrawerBody>
            <Divider />

            <SidebarNav />
            <Divider />
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
  // }
  return (
    <Box as="aside" w="64" mr="8">
      <SidebarNav />
    </Box>
  );
}
