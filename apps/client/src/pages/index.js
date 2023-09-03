import React from "react";
import { PinInput, PinInputField, Input, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const Inicio = () => {
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
    <main className={`flex min-h-screen items-center justify-center `}>
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
      </div>
    </main>
  );
};
export default Inicio;
