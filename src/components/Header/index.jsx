import {
  Box,
  Flex,
  Icon,
  IconButton,
  useBreakpointValue,
} from "@chakra-ui/react";
import { RiMenuLine } from "react-icons/ri";

import { useSidebarDrawer } from "../../contexts/SidebarDrawerContext";
import { Logo } from "./Logo";
import { NavBar, Navbar } from "./NavBar";
import { Profile } from "./Profile";
import { SearchBox } from "./SearchBox";

export function Header() {
  const { onOpen } = useSidebarDrawer();
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex as="header" w="100%" h="20" px="6" mt="4">
      {!isWideVersion && (
        <>
          <IconButton
            aria-label="Open Navigation"
            icon={<Icon as={RiMenuLine} />}
            fontSize="24"
            variant="unstyled"
            onClick={onOpen}
            pt="6"
          ></IconButton>
        </>
      )}

      <Logo />

      {/* {isWideVersion && <SearchBox />} */}

      <Flex align="center" ml="auto">
        {isWideVersion && <NavBar />}

        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  );
}
