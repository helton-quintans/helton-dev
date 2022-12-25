import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Center,
  Divider,
  Flex,
  Heading,
  IconButton,
  Link,
  List,
  ListIcon,
  ListItem,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import { FC, memo, PropsWithChildren } from "react";
import { MdCheckCircle } from "react-icons/md";
import { SlGraduation } from "react-icons/sl";

import { Header } from "../components/Header";

import { MdOutlineFileDownload } from "react-icons/md";
import Footer from "../components/Footer";

const ResumeSection = memo(({ title, children }) => {
  return (
    <>
      <Header />
      <Center py="4">
        <Link target="_blank" download href="/cv.pdf">
          <IconButton
            variant="outline"
            me="2"
            aria-label="Search database"
            icon={<MdOutlineFileDownload />}
          ></IconButton>
          Donwload Resume
        </Link>
      </Center>

      {/* <Divider mt="8" /> */}
      <Center px={["0", "44"]}>
        <Card variant="outline" p={["4", "8"]} mt="8" m="2">
          <CardHeader>
            <Heading size="md" color="#FFE13B">
              Helton Quintans da Silva
            </Heading>
            <Text textColor="gray.100">Brasileiro, 30 anos</Text>
          </CardHeader>

          <CardBody>
            <Stack divider={<StackDivider />} spacing="4">
              <Box>
                <Heading
                  size="xs"
                  textTransform="uppercase"
                  borderBottom="2px solid"
                  borderBottomColor="#FFE13B"
                  textColor="gray.50"
                >
                  RESUMO DE QUALIFICAÇÃO
                </Heading>
                <Text textColor="gray.100" pt="2" fontSize="sm">
                  Atuação no segmento da Tecnologia da Informação, certificado
                  pelo SFPC® - Scrum Foundations Professional Certificate com
                  experiência desenvolvendo e testando aplicações no ecossistema
                  React utilizando Javascript, TypeScript, NodeJS e outras
                  tecnologias aplicando princípios e boas práticas de UI/UX,
                  Desenvolvimento e Testes de Softwares em ambientes com
                  metodologia ágil (SCRUM). Atuação: Desenvolvimento de
                  interfaces, Teste automatizados, RPA - (Robotic process
                  automation).
                </Text>
              </Box>
              <Box>
                <Heading
                  size="xs"
                  textTransform="uppercase"
                  borderBottom="2px solid"
                  borderBottomColor="#FFE13B"
                  textColor="gray.50"
                >
                  FORMAÇÃO ACADÊMICA
                </Heading>
                <Text textColor="gray.100" pt="2" fontSize="sm">
                  <Text>
                    Graduando em Análise e desenvolvimento de sistemas.
                  </Text>
                  <Text> UCB - Universidade Católica de Brasília.</Text>
                  <Text> 2020-2023.</Text>

                  <Text fontWeight="bold" color="telegram.500">
                    {" "}
                    Certificações:
                  </Text>
                  <Text>
                    {" "}
                    SFPC® - Scrum Foundations Professional Certificate PTBR
                  </Text>

                  <Text fontWeight="bold" color="telegram.500">
                    {" "}
                    Conhecimentos Específicos:
                  </Text>

                  <Text>
                    Sistemas Operacionais: Windows, Linux. Metodologias: SCRUM.
                    Testes: Jest, Robot Framework, Cypress. Ferramentas:
                    Next.js, React Query, React Hooks, HTML, CSS, SASS, SCSS,
                    Styled Components, Tailwind CSS, Chakra UI, Graphql,
                    Postman, Puppeteer, Axios, REST API, JWT, MirageJS, Strapi
                    CMS, Jira, GitHub, Git, SPA, Context API, Figma, Vite, Yarn,
                    Visual Studio Code.
                  </Text>
                </Text>
              </Box>
              <Box>
                <Heading
                  size="xs"
                  textTransform="uppercase"
                  borderBottom="2px solid"
                  borderBottomColor="#FFE13B"
                  textColor="gray.50"
                >
                  EXPERIÊNCIA PROFISSIONAL
                </Heading>
                <Text textColor="gray.100" pt="2" fontSize="sm">
                  <Text textColor="telegram.500">
                    AEOLUS CLOUD | Recife | PE 2022 a Atual
                  </Text>
                  <Text as="i">
                    {" "}
                    Empresa Privada | Empresa do setor de segurança, soluções de
                    Inteligência Artificial (AI) e Internet das Coisas (IoT).
                  </Text>

                  <Text fontWeight="bold" color="telegram.500">
                    {" "}
                    Desenvolvedor Front-End
                  </Text>
                  <List spacing={3}>
                    <ListItem>
                      <ListIcon as={MdCheckCircle} color="#FFE13B" />
                      Atuação em time ágil (SCRUM)
                    </ListItem>
                    <ListItem>
                      <ListIcon as={MdCheckCircle} color="#FFE13B" />
                      Desenvolvimento de interfaces utilizando o ecossistema
                      React, Node, Next.js como framework e Chakra Ui
                      (programação declarativa) e outras tecnologias.
                    </ListItem>
                    <ListItem>
                      <ListIcon as={MdCheckCircle} color="#FFE13B" />
                      Estruturação da esteira de automação de testes e2e com
                      Cypress.
                    </ListItem>
                    <ListItem>
                      <ListIcon as={MdCheckCircle} color="#FFE13B" />
                      Testes unitários com Jest.
                    </ListItem>
                    <ListItem>
                      <ListIcon as={MdCheckCircle} color="#FFE13B" />
                      PostMan, Swagger e documentação.
                    </ListItem>
                    <ListItem>
                      <ListIcon as={MdCheckCircle} color="#FFE13B" />
                      RPA com Puppeteer.
                    </ListItem>
                    <ListItem>
                      <ListIcon as={MdCheckCircle} color="#FFE13B" />
                      Configuração de ambientes linux.
                    </ListItem>
                  </List>
                </Text>

                <Text textColor="gray.100" pt="2" fontSize="sm">
                  <Text textColor="telegram.500">
                    WATI | São Paulo | SP 2020 a 2021
                  </Text>
                  <Text as="i">
                    {" "}
                    Empresa Privada / A WATI é uma empresa de prestação de
                    serviços de TI e especializada na terceirização e gestão de
                    projetos.
                  </Text>

                  <Text textColor="telegram.500" fontWeight="bold">Analista de Testes e Qualidade</Text>
                  <List spacing={3}>
                    <ListItem>
                      <ListIcon as={MdCheckCircle} color="#FFE13B" />
                      Atuação em time ágil (SCRUM)
                    </ListItem>
                    <ListItem>
                      <ListIcon as={MdCheckCircle} color="#FFE13B" />
                      Utilização da ferramenta TESTLINK para escrita e
                      planejamento dos casos de testes.
                    </ListItem>
                    <ListItem>
                      <ListIcon as={MdCheckCircle} color="#FFE13B" />
                      Conhecimento em ferramentas de Gestão de Projetos Ágeis
                      (JIRA).
                    </ListItem>
                    <ListItem>
                      <ListIcon as={MdCheckCircle} color="#FFE13B" />
                      Testes funcionais manuais utilizando principalmente
                      técnicas como Caixa Preta, Implantação e Exploratório.
                    </ListItem>
                    <ListItem>
                      <ListIcon as={MdCheckCircle} color="#FFE13B" />
                      Execução e estruturamento de testes e Regressivos.
                    </ListItem>
                    <ListItem>
                      <ListIcon as={MdCheckCircle} color="#FFE13B" />
                      Testes Automatizados com ROBOT FRAMEWORK.
                    </ListItem>
                    <ListItem>
                      <ListIcon as={MdCheckCircle} color="#FFE13B" />
                      BDD, GHERKIN e CUCUMBER
                    </ListItem>
                    <ListItem>
                      <ListIcon as={MdCheckCircle} color="#FFE13B" />
                      Testes de API usando POSTMAN
                    </ListItem>
                    <ListItem>
                      <ListIcon as={MdCheckCircle} color="#FFE13B" />
                      Cobertura de Tickets nacionais e internacionais.
                    </ListItem>
                  </List>
                </Text>

                <Text textColor="gray.100" pt="2" fontSize="sm">
                  <Text textColor="telegram.500">YANAK | PE | 2019 a 2020</Text>
                  <Text as="i">
                    {" "}
                    Empresa Privada | A Yanak é uma empresa privada que atua no
                    segmento de alimentação e delivery.
                  </Text>

                  <Text textColor="gray.100" fontWeight="bold">
                    Desenvolvedor Front-end freelancer
                  </Text>
                  <List spacing={3}>
                    <ListItem>
                      <ListIcon as={MdCheckCircle} color="#FFE13B" />
                      Atuando como front-end realizei a criação de interfaces
                      com REACT e NEXT.JS como framework.
                    </ListItem>
                    <ListItem>
                      <ListIcon as={MdCheckCircle} color="#FFE13B" />
                      No back-end, entreguei um chatbot com linguagem natural
                      que suporta 40 idiomas nativamente e 104 através de
                      integração BERT.
                    </ListItem>
                  </List>
                </Text>

                <Text pt="2" fontSize="sm">
                  <Text textColor="telegram.500">
                    FORÇA AÉREA BRASILEIRA | 2011 a 2017
                  </Text>
                  <Text textColor="gray.100" as="i">
                    {" "}
                    Empresa Privada / A WATI é uma empresa de prestação de
                    serviços de TI e especializada na terceirização e gestão de
                    projetos.
                  </Text>

                  <Text fontWeight="bold">Assistente Administrativo</Text>
                  <List spacing={3}>
                    <ListItem>
                      <ListIcon as={MdCheckCircle} color="#FFE13B" />
                      Cobertura no atendimento a civis e militares para a
                      garantia dos direitos assistenciais como Assistência,
                      Assistência médico-hospitalar, Assistência pré-escolar,
                      Auxílio natalidade, Auxílio Transporte e Declaração de
                      Beneficiários.
                    </ListItem>
                    <ListItem>
                      <ListIcon as={MdCheckCircle} color="#FFE13B" />
                      Publicação dos processos e seus desfechos em boletim
                      oficial da FAB e no Diário Oficial da União.
                    </ListItem>
                    <ListItem>
                      <ListIcon as={MdCheckCircle} color="#FFE13B" />
                      Cobertura da Prestação de Contas e Auditoria dos
                      benefícios concedidos pela União.
                    </ListItem>
                  </List>
                </Text>

                <Divider py="2" />

                <Heading
                  size="xs"
                  textTransform="uppercase"
                  borderBottom="2px solid"
                  borderBottomColor="#FFE13B"
                  my="4"
                  textColor="gray.50"
                >
                  INFORMAÇÕES COMPLEMENTARES | CURSOS E CONGRESSOS
                </Heading>

                <List spacing={3}>
                  <ListItem>
                    <ListIcon as={SlGraduation} color="#FFE13B" />
                    2021 | Curso Ignite - RocketSeat
                  </ListItem>
                  <ListItem>
                    <ListIcon as={SlGraduation} color="#FFE13B" />
                    2020 | Fundamentos de Arquitetura de Sistemas – Digital
                    Innovation One.
                  </ListItem>
                  <ListItem>
                    <ListIcon as={SlGraduation} color="#FFE13B" />
                    2019 | Introdução ao ReactJS - Digital Innovation One.
                  </ListItem>
                  <ListItem>
                    <ListIcon as={SlGraduation} color="#FFE13B" />
                    Introdução ao NodeJS com Express - Digital Innovation One.
                  </ListItem>
                  <ListItem>
                    <ListIcon as={SlGraduation} color="#FFE13B" />
                    2019 | Introdução ao Git e GitHub - Digital Innovation One.
                  </ListItem>
                  <ListItem>
                    <ListIcon as={SlGraduation} color="#FFE13B" />
                    Automação de Testes com Robot Framework básico – Udemy.
                  </ListItem>
                  <ListItem>
                    <ListIcon as={SlGraduation} color="#FFE13B" />
                    2019 | Javascript - Web moderna - Cod3r.
                  </ListItem>
                  <ListItem>
                    <ListIcon as={SlGraduation} color="#FFE13B" />
                    2019 | TSPI - Júlio de Lima.
                  </ListItem>
                  <ListItem>
                    <ListIcon as={SlGraduation} color="#FFE13B" />
                    2018 | Lógica de Programação – Fuctura Tecnologia.
                  </ListItem>
                </List>
              </Box>
            </Stack>
          </CardBody>
        </Card>
      </Center>

      <Footer />
    </>
  );
});

ResumeSection.displayName = "ResumeSection";
export default ResumeSection;
