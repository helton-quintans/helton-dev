import { ChakraProvider } from "@chakra-ui/react";
import { ReactQueryDevtools } from "react-query/devtools";
import { theme } from "../styles/theme";

import { QueryClient, QueryClientProvider } from "react-query";
import { SidebarDrawerProvider } from "../contexts/SidebarDrawerContext";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <SidebarDrawerProvider>
          <Component {...pageProps} />
        </SidebarDrawerProvider>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default MyApp;
