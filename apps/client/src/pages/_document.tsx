import { Html, Head, Main, NextScript } from "next/document";
import { ColorModeScript } from "@chakra-ui/react";
import { config } from "./_app";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <ColorModeScript initialColorMode={config.initialColorMode as any} />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
