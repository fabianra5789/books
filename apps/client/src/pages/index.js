import React from "react";
import { PinInput, PinInputField, Input, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import Image from "next/image";
import { Inter } from "next/font/google";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";

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
    console.log(form);
    const toastID = toast.loading("Agregando libro, dame un momento");
    await new Promise((resolve) => {
      setTimeout(() => {
        console.log("Han pasado 10 segundos.");
        resolve(); // Resuelve la promesa después de 10 segundos
      }, 10000);
    });
    toast.dismiss(toastID);
    router.push("/auth/books");
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
    <main className={`flex min-h-screen items-center justify-center `}>
      <Card className="w-1/2">
        {" "}
        <div className="flex justify-center items-center flex-col gap-6">
          <h1 className="text-center text-4xl font-bold">Registro de libros</h1>

          <div className="flex flex-col justify-center">
            <p className="text-base text-left font-bold my-2"></p>
            <p className="text-base text-left font-bold my-2">titulo</p>
            <Input
              variant="filled"
              placeholder="Ingresa el titulo"
              onChange={(e) => handleChange("titulo", e.target.value)}
            />
            <p className="text-base text-left font-bold my-2"></p>
            <p className="text-base text-left font-bold my-2">descripcion</p>
            <Input
              variant="filled"
              placeholder="Ingresa la descripcion"
              onChange={(e) => handleChange("titulo", e.target.value)}
            />
            <p className="text-base text-left font-bold my-2"></p>
            <p className="text-base text-left font-bold my-2">categoria</p>
            <Input
              variant="filled"
              placeholder="Ingresa la categoria"
              onChange={(e) => handleChange("titulo", e.target.value)}
            />
            <p className="text-base text-left font-bold my-2"></p>
            <p className="text-base text-left font-bold my-2">precio</p>
            <Input
              variant="filled"
              placeholder="Ingresa el precio"
              onChange={(e) => handleChange("titulo", e.target.value)}
            />
            <p className="text-base text-left font-bold my-2"></p>
            <p className="text-base text-left font-bold my-2">autor</p>
            <Input
              variant="filled"
              placeholder="Ingresa el autor"
              onChange={(e) => handleChange("titulo", e.target.value)}
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
  );
};

export default Inicio;
