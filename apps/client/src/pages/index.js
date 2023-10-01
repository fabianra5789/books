import React from "react";
import { useRouter } from "next/router";
import {
  FaGlassCheers,
  FaCocktail,
  FaUser,
  FaInfoCircle,
} from "react-icons/fa";

import {
  ChakraProvider,
  extendTheme,
  Box,
  Container,
  Heading,
  Text,
  Flex,
  Button,
  CSSReset,
} from "@chakra-ui/react";

const customTheme = extendTheme({
  fonts: {
    heading: "Montserrat, sans-serif",
    body: "Roboto, sans-serif",
  },
  colors: {
    primary: {
      50: "#F4F4F4",
      100: "#E5E5E5",
    },
    secondary: {
      50: "#333333",
      100: "#222222",
    },
    teal: {
      500: "#008080",
    },
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: "bold",
      },
    },
    Card: {
      baseStyle: {
        bg: "primary.100",
        color: "secondary.50",
      },
    },
  },
});

const Ini = () => {
  const router = useRouter();

  const goToLogin = () => {
    router.push("/auth/login");
  };
  const goToBares = () => {
    router.push("/auth/bares");
  };
  const goToAdd = () => {
    router.push("/auth/add");
  };

  const goToRegister = () => {
    router.push("/auth/register");
  };

  return (
    <ChakraProvider theme={customTheme}>
      <CSSReset />
      <Box>
        {/* Header */}
        <Box
          bg="secondary.100"
          p={4}
          mb={4}
          borderBottom="1px solid secondary.50"
        >
          <Container maxW="container.xl">
            <Flex alignItems="center">
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
          </Container>
        </Box>

        {/* Teal Section */}
        <Container
          maxW="container.xl"
          bg="gray.600" // Cambiar el color de fondo a gris claro
          p={6}
          borderRadius="lg"
          boxShadow="lg"
          mb={4}
          textAlign="center"
        >
          <FaCocktail size={32} color="primary.50" mb={2} />{" "}
          <Heading as="h2" size="xl" color="primary.50" mb={4}>
            Encuentra los Mejores Bares en Bogotá
          </Heading>
          <Text fontSize="lg" color="primary.50" mb={4}>
            Explora nuestra extensa colección de bares en Bogotá. Encuentra
            información detallada sobre precios, ubicaciones, catálogos y mucho
            más.
          </Text>
          <Button
            colorScheme="teal"
            size="lg"
            leftIcon={<FaUser />}
            onClick={goToLogin}
          >
            ¡comencemos!
          </Button>
        </Container>

        {/* About Section */}
        <Container
          maxW="container.xl"
          bg="gray.600"
          p={6}
          borderRadius="lg"
          boxShadow="lg"
          mt={4}
          mb={4} // Agregar margen inferior para separar las cards
          textAlign="center"
        >
          <FaInfoCircle size={32} color="teal.500" mb={2} />{" "}
          <Text fontSize="lg" color="primary.50" mb={4}>
            ¡Bienvenido a BogotáNightlifeHub - Tu Guía Definitiva de Bares en
            Bogotá! Sumérgete en la emocionante escena nocturna de la capital
            colombiana mientras exploramos los mejores bares que Bogotá tiene
            para ofrecer. Si eres un amante de los cócteles artesanales, un
            aficionado a la música en vivo, o simplemente alguien en busca de un
            lugar acogedor para disfrutar con amigos, estás en el lugar
            adecuado. En BogotáNightlifeHub, hemos recorrido cada rincón de esta
            vibrante ciudad en busca de los bares más auténticos, exclusivos y
            sorprendentes. Nuestra misión es brindarte información actualizada y
            detallada sobre los mejores establecimientos, sus menús, eventos
            especiales, y todo lo que necesitas saber para vivir una experiencia
            única en la vida nocturna de Bogotá. Ya sea que estés planeando una
            noche de diversión con amigos, una cita romántica o simplemente
            desees explorar nuevos lugares, estamos aquí para ser tu guía
            confiable en este emocionante viaje a través de los bares de Bogotá.
            ¡Prepárate para descubrir el encanto de Bogotá después del
            atardecer! Empecemos juntos esta emocionante aventura.
          </Text>
          <Button
            colorScheme="teal"
            size="lg"
            leftIcon={<FaCocktail />}
            onClick={goToBares}
          >
            Ver Bares
          </Button>
        </Container>

        <Container
          maxW="container.xl"
          bg="gray.600"
          p={6}
          borderRadius="lg"
          boxShadow="lg"
          mb={4}
          textAlign="center"
        >
          <FaCocktail size={32} color="primary.50" mb={2} />{" "}
          <Heading as="h2" size="xl" color="primary.50" mb={4}>
            ¡Quieres registrar tu sitio?
          </Heading>
          <Text fontSize="lg" color="primary.50" mb={4}>
            Registra de manera facil y rapida tu sitio.
          </Text>
          <Button
            colorScheme="teal"
            size="lg"
            leftIcon={<FaUser />}
            onClick={goToAdd}
          >
            Registro
          </Button>
        </Container>

        {/* Footer */}
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
      </Box>
    </ChakraProvider>
  );
};

export default Ini;
