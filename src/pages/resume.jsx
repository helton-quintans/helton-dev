import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Center,
  Divider,
  Heading,
  Link,
  List,
  ListIcon,
  ListItem,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import { memo } from "react";
import { MdCheckCircle } from "react-icons/md";
import { SlGraduation } from "react-icons/sl";

import { Header } from "../components/Header";

import { MdOutlineFileDownload } from "react-icons/md";
import { keyframes } from "@emotion/react";
import Footer from "../components/Footer";

import { differenceInYears, isBefore } from "date-fns";

const blinkAnimation = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0.5; }
  100% { opacity: 1; }
`;

const ResumeSection = memo(({ title, children }) => {
  const dataInicioExperiencia = new Date("2019-01-19"); 
  const dataAtual = new Date();

  const anosDeExperiencia = differenceInYears(
    dataAtual,
    dataInicioExperiencia
  );
  return (
    <>
      <Header />
      <Center mt="24">
          {/* <Link target="_blank" download href="/cv.pdf" >
          <Button
            variant="outline"
            minW="170px"
            aria-label="download"
            leftIcon={<MdOutlineFileDownload />}
            animation={`${blinkAnimation} 2s infinite`}
            boxShadow="1px 5px 10px rgba(206, 203, 22, 0.637)"
            _hover={{
              opacity: 0.7,
              transform: "scale(1.1)",
              transition: "all 0.2s ease-in-out",
              color: "#FFE13B",
            }}
          >

          Download [en]
          </Button>
        </Link> */}

        <Link target="_blank" download href="/cv.pdf" >
          <Button
            variant="outline"
            minW="170px"
            // me="2"
            aria-label="download"
            leftIcon={<MdOutlineFileDownload />}
            animation={`${blinkAnimation} 2s infinite`}
            boxShadow="1px 5px 10px rgba(206, 203, 22, 0.637)"
            _hover={{
              opacity: 0.7,
              transform: "scale(1.1)",
              transition: "all 0.2s ease-in-out",
              color: "#FFE13B",
            }}
          >

          Baixar cv [ pt-br ]
          </Button>
        </Link>
      </Center>

      {/* <Divider mt="8" /> */}
      <Center mx={"auto"} maxW="890px" textAlign="justify">
        <Card variant="outline" p={["4", "24"]} mt="8" m="2">
          <CardHeader >
            <Heading size="md" color="#FFE13B" mx>
              Helton Quintans da Silva
            </Heading>
            <Text textColor={"telegram.500"}>Brasileiro, 30 anos</Text>
          </CardHeader>

          <CardBody color="gray.50">
            <Stack divider={<StackDivider />} spacing="4">
              <Box>
                <Heading
                  size="xs"
                  textTransform="uppercase"
                  borderBottom="2px solid"
                  borderBottomColor="#FFE13B"
                >
                  RESUMO DE QUALIFICAÇÃO
                </Heading>
                <Text pt="2" fontSize="sm" textAlign="justify">
                  Desenvolvedor Front-End com <Text as="span" fontWeight="bold" color="telegram.500">{anosDeExperiencia}{" "}
                  {anosDeExperiencia === 1 ? "ano" : "anos"} </Text> de experiência,
                  especializado em <Text as="span" fontWeight="bold" color="telegram.500">React</Text> e com expertise em soluções para 4 setores econômicos
                  do país: Agrícola, Financeiro, Saúde e Segurança. No setor agrícola destaco o
                  desenvolvimento do <Text as="span" fontWeight="bold" color="telegram.500">AgroSIG</Text>, adotado pela AMAGGI, uma das dez maiores empresas
                  do agronegócio no Brasil de acordo com a<Text as="span" fontWeight="bold" color="telegram.500"> Forbes Agro100.</Text> No setor financeiro,
                  contribui significativamente nos módulos de Extrato Bancário, PIX e Link de
                  Pagamentos, por meio da aplicação <Text as="span" fontWeight="bold" color="telegram.500">Conta Justa</Text>, atendendo a uma base de <Text as="span" fontWeight="bold" color="telegram.500">mais
                  de 50 mil usuários </Text>.
                </Text>
              </Box>

              <Box>
                <Heading
                  size="xs"
                  textTransform="uppercase"
                  borderBottom="2px solid"
                  borderBottomColor="#FFE13B"
                >
                  EXPERIÊNCIA PROFISSIONAL
                </Heading>

                <Text pt="2" fontSize="sm">
                  <Text textColor="telegram.500" fontWeight="black">
                    JUSTA SOLUÇÕES FINANCEIRAS | Recife | PE - 2023 a Atual 
                  </Text>
                  <Text as="i" textColor="gray.200">
                    {" "}
                    Empresa Privada | Fintech de soluções financeiras para pequenos e médios negócios do Brasil.
                  </Text>

                  <Text fontWeight="bold" color="telegram.500" mt="2">
                    {" "}
                    Desenvolvedor Front-End Pleno
                  </Text>
                  <List spacing={3}>
                    <Text>
                      Contribuí ativamente com os módulos PIX, Extrato Bancário e a criação do Cartão de Crédito,
                      integrando parcerias e bandeiras como a American Express, Visa e Mastercard. Alcancei resultados
                      notáveis, incluindo um aumento de 7% no uso diário após a reformulação do Extrato Bancário e uma
                      melhoria de 15% na performance geral da aplicação com otimizações e hooks. Mantive uma sólida
                      cobertura de testes unitários e de integração, superando a meta de 70%, resultando em uma redução
                      significativa das consultas de suporte ao cliente. Promovo qualidade e avanço técnico para a equipe
                      através de encontros semanais com front-ends de 5 squads responsáveis pelo desenvolvimento e
                      manutenção de 2 importantes produtos da Justa e em menor proporção trabalho com Angular.
                    </Text>
                    <ListItem fontWeight='medium'>
                      <ListIcon as={MdCheckCircle} color="#FFE13B" />
                      Tecnologias utilizadas: <Text fontStyle='italic'>TypeScript, React, React Query, Angular, Axios, Zustand, Jotai, CI/CD, Styled-components,
                      Storybook, Chakra UI, Sentry, Jest, React Testing Library, ESLint, Prettier, Husky, JIRA, Git e Github.</Text>
                    </ListItem>                      
                  </List>
                  <Divider mt="4"/>
                </Text>
                

                <Box pt="2" fontSize="sm" >
                  <Text textColor="telegram.500" fontWeight="black" mt="4">
                    NUVEM TECNOLOGIA | Cuiabá | MT - 2023 (4 meses)
                  </Text>
                  <Text as="i" textColor="gray.200">
                    {" "}
                    Empresa Privada | Soluções para o agronegócio, sistemas com imagens via satélite e referência geoespacial,
                    integrado com ERPs agrícolas para impulsionar a exportação mundial de milho, algodão e soja.
                  </Text>

                  <Text fontWeight="bold" color="telegram.500" mt="2">
                    {" "}
                    Desenvolvedor Front-End Pleno
                  </Text>
                  <List spacing={3}>
                    <Text>
                      Desempenhei um papel essencial no AgroSIG, um produto que utiliza imagens de satélite e
                      referência geoespacial para apoiar decisões agrícolas. Em resposta a incidentes de perda de estudos
                      científicos cruciais para o ciclo de cultivo, assumi a liderança no desenvolvimento de um sistema de
                      gerenciamento de arquivos na AWS S3. Em colaboração com o time de dados, aprimorei operações
                      de download, upload, edição de arquivos e navegação entre diretórios, resultando em maior
                      eficiência dos usuários e contribuindo para a exportação de toneladas de milho, soja e algodão,
                      apoiando estudos científicos que impulsionaram a produção e a qualidade desses produtos
                    </Text>
                    <ListItem fontWeight='medium'>
                      <ListIcon as={MdCheckCircle} color="#FFE13B" />
                      Tecnologias utilizadas: <Text fontStyle='italic'>React, Google Maps API, GeoJSON, React-query, Axios, TypeScript, Google Earth KML,
                      CI/CD, styled-components, Chakra UI, Ant Design, Recharts, Zustand, Azure AD, JIRA IOS.</Text>
                    </ListItem>                     
                  </List>
                  <Divider mt="4"/>
                </Box>

                <Text pt="2" fontSize="sm">
                  <Text textColor="telegram.500" fontWeight="black"  mt="4">
                    AEOLUS CLOUD | Recife | PE - 2022 a 2023 (1 ano e 1 mês)
                  </Text>
                  <Text as="i" textColor="gray.200">
                    {" "}
                    Empresa Privada | Empresa do setor de segurança, soluções de
                    Inteligência Artificial (AI) e Internet das Coisas (IoT).
                  </Text>

                  <Text fontWeight="bold" color="telegram.500" mt="2">
                    {" "}
                    Desenvolvedor Front-End
                  </Text>
                  <List spacing={3}>
                    <Text>
                      Desempenhei um papel importante na implementação de um sistema de autenticação com JWT e na
                      construção de CRUDs. Priorizei a qualidade ao criar páginas responsivas, garantindo uma
                      experiência de usuário de alta qualidade. Além disso, contribuí para desenvolver um sistema de
                      monitoramento de vídeo, facilitando o acesso a registros anteriores por meio da nuvem.
                    </Text>
                  <ListItem fontWeight='medium'>
                      <ListIcon as={MdCheckCircle} color="#FFE13B" />
                      Tecnologias utilizadas: <Text fontStyle='italic'>React, React-query, Axios, TypeScript, CI/CD, styled-components, Chakra UI, Git e Github
                      Recharts, JWT, Postman, Jest, Testing Library, Strapi CMS, Linux.</Text>
                    </ListItem>  
                  </List>
                  <Divider mt="4"/>
                </Text>

                <Text pt="2" fontSize="sm">
                  <Text textColor="telegram.500" fontWeight="black"  mt="4">
                    WATI | São Paulo | SP - 2020 a 2021 (1 ano e 4 meses)
                  </Text>
                  <Text as="i" textColor="gray.200">
                    {" "}
                    Empresa Privada / A WATI é uma empresa de prestação de
                    serviços de TI e especializada na terceirização e gestão de
                    projetos.
                  </Text>

                  <Text fontWeight="black" textColor="telegram.500" mt="2">
                    Analista de Testes e Qualidade
                  </Text>
                  <Text>
                    Na WATI, prestadora de serviços para a MV Sistemas, líder em tecnologia para gestão de saúde na
                    América Latina. Trabalhando em produtos críticos, como o Prontuário Eletrônico do Paciente e
                    sistemas financeiros e de suprimentos hospitalares, realizei uma ampla variedade de testes, destaco
                    minha participação na cobertura de testes regressivos utilizando Robot Framework, BDD e Gherkin.
                    Além disso, gerenciei com sucesso tickets nacionais e internacionais através do JIRA, garantindo
                    cobertura abrangente nos testes e estabilidade e desempenho dos sistemas críticos da MV, ajudando
                    a prevenir erros e garantir um fluxo de trabalho tranquilo para os usuários finais.
                  </Text>
                   <List>
                    <ListItem fontWeight='medium' mt="4">
                      <ListIcon as={MdCheckCircle} color="#FFE13B" />
                      Tecnologias utilizadas: 
                      <Text fontStyle='italic'>
                      Robot Framework, JIRA, CI/CD, Git e Github Recharts, Postman, BDD e Gherkin.
                      </Text>
                    </ListItem>  
                    </List>
                  <Divider mt="4"/>
                </Text>

                <Text pt="2" fontSize="sm">
                  <Text textColor="telegram.500" fontWeight="black" mt="4">
                    YANAK | PE - 2019 a 2020 (1 ano){" "}
                  </Text>
                  <Text as="i">
                    {" "}
                    Empresa Privada | A Yanak é uma empresa privada que atua no
                    segmento de alimentação e delivery.
                  </Text>

                  <Text fontWeight="bold" textColor="telegram.500" mt="4">
                    Desenvolvedor Front-end freelancer
                  </Text>
                    <Text>
                      Na função de Desenvolvedor Front-end, minha responsabilidade era projetar interfaces utilizando as
                      tecnologias, React e Next.js, assegurando experiências de usuário atraentes e funcionais. Também
                      me destaquei na criação de um chatbot com habilidades de processamento de linguagem natural,
                      oferecendo suporte nativo para 40 idiomas e integração avançada com BERT, permitindo
                      comunicação eficaz em 104 idiomas. Além disso, desenvolvi soluções de RPA (Robotic Process
                      Automation) utilizando Puppeteer.
                  </Text>
                  <List>
                    <ListItem fontWeight='medium'>
                      <ListIcon as={MdCheckCircle} color="#FFE13B" mt="4"/>
                      Tecnologias utilizadas: 
                      <Text fontStyle='italic'>
                        React, React-query, Axios, TypeScript, CI/CD, styled-components, Chakra UI, MUI, Git e
                        Github Recharts, JWT, Postman, Jest, Testing Library, Strapi CMS.
                      </Text>
                    </ListItem>  
                    </List>
                </Text>

                <Text pt="2" fontSize="sm">
                  <Text textColor="telegram.500" fontWeight="black">
                    FORÇA AÉREA BRASILEIRA | 2011 a 2017 (6 anos)
                  </Text>
                  <Text as="i" color="gray.200"> Empresa Pública.</Text>

                  <Text fontWeight="bold" textColor="telegram.500" mt="4">
                    Assistente Administrativo
                  </Text>
                  <List spacing={3} textAlign="justify">
                    <ListItem>
                     
                      Cobertura no atendimento a civis e militares para a
                      garantia dos direitos assistenciais como Assistência,
                      Assistência médico-hospitalar, Assistência pré-escolar,
                      Auxílio natalidade, Auxílio Transporte e Declaração de
                      Beneficiários.
                    
                     
                      Publicação dos processos e seus desfechos em boletim
                      oficial da FAB e no Diário Oficial da União.
                     
                      Cobertura da Prestação de Contas e Auditoria dos
                      benefícios concedidos pela União.
                    </ListItem>
                  </List>
                </Text>

                <Divider py="2" />

                <Box mt="4">
                <Heading
                  size="xs"
                  textTransform="uppercase"
                  borderBottom="2px solid"
                  borderBottomColor="#FFE13B"
                >
                  FORMAÇÃO ACADÊMICA
                </Heading>
                <Text pt="2" fontSize="sm">
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
                    Sistemas Operacionais:  Linux, IOS, Windows.
                  </Text>

                  <Text>
                    Metodologias: SCRUM e Kanban.
                  </Text>
                  <Text>
                  Testes:  Jest, Testing library, Cypress. 
                  </Text>
                  <Text textAlign="justify">
                  Ferramentas:
                  Next.js, React Query, React Hooks, HTML, CSS, SASS, SCSS, Styled Components, Tailwind CSS, Chakra UI, Ant Design, Prime React, Material UI, Postman, Axios, REST API, JWT, MirageJS, Jira, Confluence, Azure AD, GitHub, Git, SPA, Context API,  Figma, Vite, Yarn, Visual Studio Code.
                  </Text>

                  
                </Text>
              </Box>

                <Heading
                  size="xs"
                  textTransform="uppercase"
                  borderBottom="2px solid"
                  borderBottomColor="#FFE13B"
                  my="4"
                >
                  INFORMAÇÕES COMPLEMENTARES | CURSOS E CONGRESSOS
                </Heading>

                <List spacing={3} textAlign="justify">
                  <ListItem>
                    <ListIcon as={SlGraduation} color="#FFE13B" />
                    2023 | TDC (The Developers Conference)  - Trilha Web e Front-end, presencial,  Recife -PE
                  </ListItem>
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
