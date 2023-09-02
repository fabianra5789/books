import type { AppProps } from "next/app";
// Chakra UI
import chakraTheme from "@chakra-ui/theme";
import { ChakraBaseProvider, extendBaseTheme } from "@chakra-ui/react";
// Extends
const { Button } = chakraTheme.components;
// Theme
//  Add your color mode config
export const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};
const theme = extendBaseTheme({
  components: {
    Button,
  },
  config,
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraBaseProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraBaseProvider>
  );
}
