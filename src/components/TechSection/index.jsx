import { Flex, Heading, HStack, SimpleGrid, Text } from "@chakra-ui/react";
import { DiMysql } from "react-icons/di";
import {
  SiAntdesign,
  SiChakraui,
  SiCss3,
  SiCypress,
  SiDocker,
  SiFigma,
  SiGit,
  SiGithub,
  SiGitlab,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiLinux,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPuppeteer,
  SiReact,
  SiSass,
  SiStyledcomponents,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

import { TbBrandReactNative } from "react-icons/tb"
import { TechBox } from "./TechBox";

export function TechSection() {
  return (
    <>
      <Flex 
        as="section"
        direction="column"
        h="100%"
        justify="center"
        alignItems={"center"} 
        maxW="1080px"
        margin="0 auto"
        p="4"
      >
        <Heading
           as="h1"
           id="techs"
           mt="10"
           textAlign="center"
           borderBottom="4px solid"
           borderColor="#FFE13B"
        >
          Techs
          {/* <span>💛</span> */}
        </Heading>{" "}

        <Text textAlign="center" px="4" mt="2">
          Main technologies I work currently.
        </Text>

        <SimpleGrid  as="section" gap={6} mt="20" minChildWidth="280px">
          <>
            <TechBox
              icon={<SiHtml5 size={80} />}
              title="HTML5"
              description="Markup language for the World Wide Web and is a key Internet
              technology, originally proposed by Opera Software. It is the
              fifth version of the HTML language."
            />
            <TechBox
              icon={<SiCss3 size={80} />}
              title="CSS"
              description="Cascading Style Sheets is a mechanism for adding style to a web document."
            />
            <TechBox
              icon={<SiJavascript size={80} />}
              title="JavaScript"
              description="JavaScript is a structured, multi-paradigm, weak dynamically typed, high-level scripting interpreted programming language."
            />
            <TechBox
              icon={<SiTypescript size={80} />}
              title="TypeScript"
              description="TypeScript is an open source programming language developed by Microsoft. It is a strict syntactic superset of JavaScript and adds optional static typing to the language."
            />

            <TechBox
              icon={<SiReact size={80} />}
              title="React"
              description="JavaScript library focused on creating user interfaces on web
              pages. It is maintained by Facebook."
            />

            {/* <TechBox
              icon={<SiReact size={80} />}
              title="React Native"
              description="React Native is a JavaScript framework for building mobile applications that allows developers to write code once and deploy it across multiple platforms, including iOS and Android."
            /> */}

            <TechBox
              icon={<TbBrandReactNative size={80} />}
              title="React Query"
              description="React Query is a library for managing asynchronous data in React applications. It provides features such as fetching, caching, and updating data, making it a powerful tool for optimizing performance and building great user experiences."
            />

            <TechBox
              icon={<SiNextdotjs size={80} />}
              title="Next.js"
              description="Open-source React front-end development framework created by Vercel that enables functionality such as server-side rendering and static website generation for React-based web applications."
            />

            <TechBox
              icon={<SiNodedotjs size={80} />}
              title="Node"
              description="An open-source, cross-platform software based on Google's V8 interpreter that allows JavaScript code to run outside of a web browser."
            />

            <TechBox
              icon={
                <HStack>
                  <SiGit size={80} />
                  <SiGithub size={80} />
                  <SiGitlab size={80} />
                </HStack>
              }
              title="Git, Github e Gitlab"
              description="File and source code hosting platform with version control using Git. It allows programmers, utilities or any user registered on the platform to contribute to private and/or open source projects from anywhere in the world."
            />

            <TechBox
              icon={<SiTailwindcss className="animate-pulse" size={80} />}
              title="TailwindCSS"
              description="A utility-first CSS framework for quickly building custom user interfaces."
            />

            <TechBox
              icon={<SiStyledcomponents className="animate-pulse" size={80} />}
              title="Styled Components"
              description="A popular library used for styling React apps. It allows you to build custom components by writing real CSS in your JavaScript."
            />

            <TechBox
              icon={<SiSass className="animate-pulse" size={80} />}
              title="Sass"
              description="Stylesheet language initially conceived by Hampton Catlin and developed by Natalie Weizenbaum."
            />

            <TechBox
              icon={<SiPuppeteer className="animate-pulse" size={80} />}
              title="Puppeteer"
              description="A Node.js library which provides a high-level API to control Chrome/Chromium over the DevTools Protocol."
            />

            <TechBox
              icon={<SiJest className="animate-pulse" size={80} />}
              title="Jest"
              description="A JavaScript testing framework built on top of Jasmine and maintained by Meta."
            />

            <TechBox
              icon={<SiCypress className="animate-pulse" size={80} />}
              title="Cypress"
              description="A purely JavaScript-based front-end testing tool built for the modern web. It aims to address the pain points developers or QA engineers face while testing an application."
            />
            <TechBox
              icon={<SiMongodb className="animate-pulse" size={80} />}
              title="MongoDB"
              description="Open-source, cross-platform document-oriented database software written in the C++ language. Classified as a NoSQL database."
            />

            {/* <TechBox
              icon={<DiMysql className="animate-pulse" size={80} />}
              title="MySQL"
              description="MySQL is a database management system, which uses the SQL language as an interface. It is currently one of Oracle Corporations most popular database management systems."
            /> */}

            <TechBox
              icon={<SiLinux className="animate-pulse" size={80} />}
              title="Linux"
              description="Linux is a term popularly used to refer to operating systems or operating systems that use the Linux Kernel."
            />

            <TechBox
              icon={<SiDocker size={80} />}
              title="Docker"
              description="Docker is a set of platform-as-a-service products that use operating system-level virtualization to deliver software in packages called containers."
            />

            <TechBox
              icon={<SiFigma className="animate-pulse" size={80} />}
              title="Figma"
              description="Figma is a vector graphics editor and design project prototyping based primarily on the web browser."
            />

            <TechBox
              icon={<SiChakraui className="animate-pulse" size={80} />}
              title="Chakra UI"
              description="Modular and accessible component library that gives you the building blocks you need to build your React applications."
            />

            <TechBox
              icon={<SiAntdesign className="animate-pulse" size={80} />}
              title="AntDesign"
              description="Ant Design is a React UI kit that is considered one of the best in the world. It is widely used and downloaded, with over 83K stars on GitHub."
            />

          </>
        </SimpleGrid>
      </Flex>
    </>
  );
}
