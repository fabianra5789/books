import React from "react";
import {
  PinInput,
  PinInputField,
  Input,
  Button,
  Box,
  Center,
  Text,
  Heading,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import toast from "react-hot-toast";

const LoginPage = () => {
  const router = useRouter();
  const [show, setShow] = React.useState(true);
  const [form, setFormValues] = React.useState({
    email: "",
    password: "",
  });

  const handleSubmit = async () => {
    console.log(form);
    const toastID = toast.loading("Ya casi inicias danos unos segundos");
    await new Promise((resolve) => {
      setTimeout(() => {
        console.log("Han pasado 10 segundos.");
        resolve(); // Resuelve la promesa después de 10 segundos
      }, 10000);
    });
    toast.dismiss(toastID);
    router.push("/");
  };
  const goToRegister = () => {
    router.push("/auth/register");
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
        <div className="flex justify-center items-center flex-col gap-6">
          <h1 className="text-center text-4xl font-bold">Inicio de sesion</h1>
          <div className="flex flex-col justify-center">
            <p className="text-base text-left font-bold my-2">Email</p>
            <Input
              variant="filled"
              placeholder="Ingresa tu email"
              onChange={(e) => handleChange("email", e.target.value)}
            />
            <p className="text-base text-left font-bold my-2">Contraseña</p>
            <div className="flex justify-between w-full">
              <PinInput
                type="alphanumeric"
                onChange={(value) => handleChange("password", value)}
                mask={show}
              >
                <PinInputField />
                <PinInputField />
                <PinInputField />
                <PinInputField />
              </PinInput>
            </div>
            <Button onClick={() => setShow(!show)} className="mt-2">
              {show ? "ocultar" : "ver"}
            </Button>
          </div>
          <Button colorScheme="teal" onClick={handleSubmit}>
            Iniciar sesion
          </Button>
          <Button colorScheme="teal" onClick={goToRegister}>
            Registrarme
          </Button>
        </div>
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

export default LoginPage;
