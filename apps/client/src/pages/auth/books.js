import React from "react";
import { useRouter } from "next/router";
import { PinInput, PinInputField, Input, Button } from "@chakra-ui/react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Text,
} from "@chakra-ui/react";

const Books = () => {
  const router = useRouter();
  const goToRegister = () => {
    router.push("/");
  };
  return (
    <main className={`flex min-h-screen items-center justify-center `}>
      <Card align="center">
        <CardHeader>
          <Heading size="md"> Biblioteca de Libros</Heading>
        </CardHeader>
        <CardBody>
          <Text>
            <strong>Libro:</strong> Maracaibo
            <br />
            <strong>Autor:</strong> Juanlugo21
            <br />
            <strong>Descripción:</strong> Vive la aventura del veneco Juan Lugo
            21
            <br />
            <strong>Precio:</strong> 2.000 Pesos
          </Text>
        </CardBody>
        <CardFooter
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <Button colorScheme="blue" marginRight="2">
            Eliminar
          </Button>
          <Button colorScheme="blue" onClick={goToRegister}>
            Volver
          </Button>
        </CardFooter>
      </Card>
    </main>
  );
};

export default Books;
