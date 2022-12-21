import { HStack, Icon } from "@chakra-ui/react";
import {
  RiDashboardLine,
  RiCodeBoxLine,
  RiNotificationLine,
  RiUserAddLine,
} from "react-icons/ri";
import { VscFilePdf } from "react-icons/vsc";
import { ImBlog } from "react-icons/im";

import { NavLink } from "../Sidebar/NavLink";

export function NavBar() {
  return (
    <HStack
      spacing={["6", "8"]}
      mx={["6", "8"]}
      pr={["6", "8"]}
      py="1"
      color="gray.300"
      borderColor="gray.700"
      borderRightWidth={1}
    >
      <NavLink icon={RiCodeBoxLine} color="gray.700" href="/">
        Projects
      </NavLink>
      <NavLink icon={VscFilePdf} color="gray.700" href="#">
        Resume
      </NavLink>
      <NavLink icon={ImBlog} color="gray.700" href="#">
        Blog
      </NavLink>

      {/* <Icon as={RiNotificationLine} fontSize="20" color="gray.700" />
      <Icon as={RiUserAddLine} fontSize="20" color="gray.700" /> */}
    </HStack>
  );
}
