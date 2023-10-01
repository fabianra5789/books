import React from "react";
import { PinInput, PinInputField, Input, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import Image from "next/image";
import { Inter } from "next/font/google";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Text,
  Box,
  Center,
} from "@chakra-ui/react";

const inter = Inter({ subsets: ["latin"] });
const Inicio = () => {
  const router = useRouter();
  const [show, setShow] = React.useState(true);
  const [form, setFormValues] = React.useState({
    titulo: "",
    descripcion: "",
    categoria: "",
    precio: "",
    autor: "",
  });

  const goToBooks = async () => {
    const toastID = toast.loading("Agregando libro, dame un momento");
    try {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify({
          title: form.titulo,
          description: form.descripcion,
          price: Number(form.precio),
          author: form.autor,
          category: form.categoria,
        }),
        redirect: "follow",
      };
      const res = await fetch("http://localhost:3080/book/new", requestOptions);
      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    } finally {
      toast.dismiss(toastID);
      router.push("/auth/bares");
    }
  };
  const goToLogin = () => {
    router.push("/auth/login");
  };

  const handleChange = (name, value) => {
    const copyForm = form;
    copyForm[name] = value;
    setFormValues(copyForm);
  };
  return (
    <Box>
      {/* Encabezado */}
      <Box bg="teal" p={4}>
        <Center>
          <Heading as="h1" color="white">
            BogotáNightlifeHub
          </Heading>
        </Center>
      </Box>
      <main className={`flex min-h-screen items-center justify-center `}>
        <Card className="w-1/2">
          {" "}
          <div className="flex justify-center items-center flex-col gap-6">
            <h1 className="text-center text-4xl font-bold">
              Registro de Sitio
            </h1>

            <div className="flex flex-col justify-center">
              <p className="text-base text-left font-bold my-2"></p>
              <p className="text-base text-left font-bold my-2">
                Nombre del establecimiento
              </p>
              <Input
                variant="filled"
                placeholder="Ingresa el nombre"
                onChange={(e) => handleChange("titulo", e.target.value)}
              />
              <p className="text-base text-left font-bold my-2"></p>
              <p className="text-base text-left font-bold my-2">descripcion</p>
              <Input
                variant="filled"
                placeholder="Ingresa la descripcion"
                onChange={(e) => handleChange("descripcion", e.target.value)}
              />
              <p className="text-base text-left font-bold my-2"></p>
              <p className="text-base text-left font-bold my-2">categoria</p>
              <Input
                variant="filled"
                placeholder="Ingresa la categoria"
                onChange={(e) => handleChange("categoria", e.target.value)}
              />
              <p className="text-base text-left font-bold my-2"></p>
              <p className="text-base text-left font-bold my-2">precio</p>
              <Input
                variant="filled"
                placeholder="Ingresa el precio"
                onChange={(e) => handleChange("precio", e.target.value)}
              />
              <p className="text-base text-left font-bold my-2"></p>
              <p className="text-base text-left font-bold my-2">Dueño</p>
              <Input
                variant="filled"
                placeholder="Ingresa el dueño"
                onChange={(e) => handleChange("autor", e.target.value)}
              />
            </div>
            <Button colorScheme="teal" onClick={goToBooks}>
              Agregar
            </Button>
            <Button colorScheme="teal" onClick={goToLogin}>
              Cerrar Sesion
            </Button>
          </div>
        </Card>{" "}
        {/* Fin de la tarjeta */}
      </main>
      {/* Pie de página */}
      <Box bg="teal" p={4} mt={4} textAlign="center">
        <Text color="white">
          Desarrollado por Eric Fabian Ramírez y Pablo Andrés Triana
        </Text>
      </Box>
    </Box>
  );
};

export default Inicio;
