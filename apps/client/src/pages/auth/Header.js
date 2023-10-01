import React from "react";
import { FaGlassCheers, FaUser, FaPencilAlt } from "react-icons/fa";
import { Flex, Heading, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();

  const goToLogin = () => {
    router.push("/auth/login");
  };

  const goToRegister = () => {
    router.push("/auth/register");
  };

  return (
    <Flex
      alignItems="center"
      bg="secondary.100"
      p={4}
      mb={4}
      borderBottom="1px solid secondary.50"
    >
      <FaGlassCheers
        size={24}
        color="primary.50"
        style={{ marginRight: "8px" }}
      />
      <Heading as="h1" color="primary.50" flex="1">
        BogotáNightlifeHub
      </Heading>
      <Button colorScheme="teal" mr={2} onClick={goToLogin}>
        Iniciar Sesión
      </Button>
      <Button colorScheme="teal" onClick={goToRegister}>
        Registro de Usuario
      </Button>
    </Flex>
  );
};

export default Header;
