import { HStack, Icon, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import {

  RiNotificationLine,
  RiUserAddLine,
} from "react-icons/ri";

import { SiAboutdotme } from "react-icons/si";

import { VscFilePdf } from "react-icons/vsc";
import { ImBlog } from "react-icons/im";

import { NavLink } from "../Sidebar/NavLink";

export function NavBar() {
  return (
    <HStack
      spacing={["6", "28"]}
      mx={["6", "8"]}
      pr={["6", "8"]}
      py="1"
      color="gray.300"
      // borderColor="gray.700"
      // borderRightWidth={1}
    >
      {/* <NavLink icon={SiAboutdotme} color="gray.700" href="/">
        About
      </NavLink> */}
      <NavLink icon={SiAboutdotme} color="gray.700" href="/#avatar">
        About
      </NavLink>
      {/* <NavLink icon={RiCodeBoxLine} color="gray.700" href="/#projects">
        Projects
      </NavLink> */}
      <NavLink icon={VscFilePdf} color="gray.700" href="/resume">
        Resume
      </NavLink>
      <NavLink icon={ImBlog} color="gray.700" href="/blog">
        Blog
      </NavLink>

      {/* <Icon as={RiNotificationLine} fontSize="20" color="gray.700" />
      <Icon as={RiUserAddLine} fontSize="20" color="gray.700" /> */}
    </HStack>
  );
}
