import React from "react";
import { Text, Box } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box
      bg="secondary.100"
      p={4}
      mt={4}
      borderTop="1px solid secondary.50"
      textAlign="center"
    >
      <Text color="primary.50">
        Desarrollado por Eric Fabian Ramírez y Pablo Andrés Triana
      </Text>
    </Box>
  );
};

export default Footer;
