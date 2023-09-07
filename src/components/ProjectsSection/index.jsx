import { Button, Flex, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { ProjectCard } from "./ProjectCard";

import { useRouter } from "next/router";

export function ProjectsSection() {
  const router = useRouter();

  return (
    <Flex
      as="section"
      direction="column"
      h="100%"
      justify="center"
      alignItems={"center"}
    >
      <Heading
        as="h1"
        id="projects"
        mt="10"
        textAlign="center"
        borderBottom="4px solid"
        borderColor="#FFE13B"
      >
        Projects <span>💛</span>
      </Heading>
      <Text textAlign="center" px="4" >
        Welcome to my projects
      </Text>

      <SimpleGrid minChildWidth="320px" maxChildWidth="500px" mt="10" gap={2}>
        <ProjectCard
          title="Dashgo"
          imageSrc="/images/dashgo.png"
          description="DashGo is an application for dashboards in general with pages and pagination, login and user inclusion system made with Next.js, Typescript, React-query and other technologies."
        >
          <Button
            color="#FFE13B"
            my="4"
            variant="outline"
            size="md"
            fontSize="20px"
            _hover={{
              opacity: 0.7,
              transform: "scale(1.2)",
              transition: "all 0.2s ease-in-out",
            }}
            onClick={() =>
              router.push("https://dashgo-henna.vercel.app/dashboard")
            }
          >
            See more
          </Button>
        </ProjectCard>
      </SimpleGrid>

      <ProjectCard
        title="Yan Bot"
        imageSrc="/images/yanBot.png"
        description="🧠 Yan is an artificial intelligence that uses Machine learning
        and NLP (natural language processing). 🌎 It is multilingual and
        supports 40 languages natively and 104 languages through BERT
        integration. 👨‍🚀 Born with the purpose of understanding customers
        intentions and providing a quick and effective response, the
        more you talk to Yan, the more he learns and improves the user
        experience. 🤘 This project has the help of the open source
        community in Brazil and the world."
      >
        <Button
          color="#FFE13B"
          my="4"
          variant="outline"
          size="md"
          fontSize="20px"
          _hover={{
            opacity: 0.7,
            transform: "scale(1.2)",
            transition: "all 0.2s ease-in-out",
          }}
          onClick={() =>
            router.push("https://github.com/helton-quintans/yan-bot")
          }
        >
          See more
        </Button>
      </ProjectCard>

      <ProjectCard
        title="hq.news"
        imageSrc="/images/hqNews.png"
        description=" The hq.news project is a blog where users can access the
        content of each post according to their subscription status
        through a Stripe payment system integration."
      >
        <Button
          color="#FFE13B"
          my="4"
          variant="outline"
          size="md"
          fontSize="20px"
          _hover={{
            opacity: 0.7,
            transform: "scale(1.2)",
            transition: "all 0.2s ease-in-out",
          }}
          onClick={() =>
            router.push("https://github.com/helton-quintans/hq-news")
          }
        >
          See more
        </Button>
      </ProjectCard>
      
      <ProjectCard
        title="Feed"
        imageSrc="/images/feed.png"
        description="Feed is an application like a social network where you can like
        and comment on a third-party publication and was developed with
        Next.js, Javascript, and Styled-Components and other
        technologies."
      >
        <Button
          color="#FFE13B"
          my="4"
          variant="outline"
          size="md"
          fontSize="20px"
          _hover={{
            opacity: 0.7,
            transform: "scale(1.2)",
            transition: "all 0.2s ease-in-out",
          }}
          onClick={() => router.push("https://feed-omega.vercel.app/")}
        >
          See more
        </Button>
      </ProjectCard>

      <ProjectCard
        title="Watch.me"
        imageSrc="/images/watchMe.png"
        description="
        Application made with typescript that lists movies by categories."
      >
        <Button
          color="#FFE13B"
          my="4"
          variant="outline"
          size="md"
          fontSize="20px"
          _hover={{
            opacity: 0.7,
            transform: "scale(1.2)",
            transition: "all 0.2s ease-in-out",
          }}
          onClick={() =>
            router.push("https://github.com/helton-quintans/watch.me")
          }
        >
          See more
        </Button>
      </ProjectCard>

      <ProjectCard
        title="B7Delivery"
        imageSrc="/images/delivery.png"
        description="
        Multi-tenancy SaaS made with Typescript and Next.js. Delivery
                system for small and medium businesses where it is possible to
                place orders for registered restaurants."
      >
        <Button
          color="#FFE13B"
          my="4"
          variant="outline"
          size="md"
          fontSize="20px"
          _hover={{
            opacity: 0.7,
            transform: "scale(1.2)",
            transition: "all 0.2s ease-in-out",
          }}
          onClick={() =>
            router.push("https://github.com/helton-quintans/b7delivery")
          }
        >
          See more
        </Button>
      </ProjectCard>

      <ProjectCard
        title="Rocketshoes"
        imageSrc="/images/rocketshoes.png"
        description="
        This project was developed at the RocketSeat Ignite Bootcamp
        with the following technologies: ReactJS, Redux, Redux-Saga,
        React, Router, v4, Axios, Polished, React-Toastify,
        styled-components, React-Icons, react-loading-skeleton,
        react-loader-spinner, json-server and more."
      >
        <Button
          color="#FFE13B"
          my="4"
          variant="outline"
          size="md"
          fontSize="20px"
          _hover={{
            opacity: 0.7,
            transform: "scale(1.2)",
            transition: "all 0.2s ease-in-out",
          }}
          onClick={() => router.push("https://rocketshoes.netlify.app/")}
        >
          See more
        </Button>
      </ProjectCard>

      <ProjectCard
        title="Control of Expenses"
        imageSrc="/images/controleDeDespesas.png"
        description="Application that allows the user to have greater accuracy in
        personal financial control by recording financial inputs and
        outputs. There is the possibility of adding, editing or deleting
        transactions in addition to storing and persisting data in local
        storage."
      >
        <Button
          color="#FFE13B"
          my="4"
          variant="outline"
          size="md"
          fontSize="20px"
          _hover={{
            opacity: 0.7,
            transform: "scale(1.2)",
            transition: "all 0.2s ease-in-out",
          }}
          onClick={() =>
            router.push("https://competent-bardeen-548773.netlify.app/")
          }
        >
          See more
        </Button>
      </ProjectCard>
    </Flex>
  );
}
