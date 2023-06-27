import {
  Flex,
  Icon,
  IconButton,
  Spacer,
  useBreakpointValue
} from "@chakra-ui/react";
import { RiMenuLine } from "react-icons/ri";

import { useSidebarDrawer } from "../../contexts/SidebarDrawerContext";
import { Logo } from "./Logo";
import { NavBar } from "./NavBar";
import { Profile } from "./Profile";

export function Header() {
  const { onOpen } = useSidebarDrawer();
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex as="header" w="100%" px="6" justify={"center"} alignItems={"center"}>
      {!isWideVersion && (
        <>
          <IconButton
            aria-label="Open Navigation"
            icon={<Icon as={RiMenuLine} />}
            fontSize="24"
            variant="unstyled"
            onClick={onOpen}
            mt="2"
          />
        </>
      )}

      <Logo />
      <Spacer />

      {/* {isWideVersion && <SearchBox />} */}

      {isWideVersion && <NavBar />}

      {/* <Spacer /> */}
      <Flex align="center">
        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  );
}
