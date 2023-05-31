import {
  Box,
  Center,
  Flex,
  Icon,
  IconButton,
  Spacer,
  useBreakpointValue,
} from "@chakra-ui/react";
import { RiMenuLine } from "react-icons/ri";

import { useSidebarDrawer } from "../../contexts/SidebarDrawerContext";
import { Logo } from "./Logo";
import { NavBar } from "./NavBar";
import { Profile } from "./Profile";
import { SearchBox } from "./SearchBox";

export function Header() {
  const { onOpen } = useSidebarDrawer();
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex
      as="header"
      w="100%"
      h="20"
      px="6"
      mt="4"
    >
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
      <Spacer />

      {/* {isWideVersion && <SearchBox />} */}

        {isWideVersion && <NavBar />}

     <Spacer />
      <Flex align="center" >
        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  );
}
