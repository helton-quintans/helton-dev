import { Stack, Divider, Box } from "@chakra-ui/react";
import Link from "next/link";
import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine,
  RiCodeBoxLine,
} from "react-icons/ri";
import { VscFilePdf } from "react-icons/vsc";
import { ImBlog } from "react-icons/im";

import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function SidebarNav() {
  return (
    <Stack spacing="12" my="8" align="flex-start">
      <NavLink icon={RiCodeBoxLine} color="gray.700" href="/#avatar">
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
    </Stack>
  );
}
