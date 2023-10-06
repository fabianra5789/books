# Aplicación de Listado de Bares en Bogotá

Este monorepo contiene la aplicación de listado de bares en Bogotá, donde los usuarios pueden explorar y calificar bares en la ciudad. La aplicación está diseñada utilizando Nest.js para el backend, Next.js para el frontend y Turbo Repo para gestionar el monorepo.

## Descripción General

La aplicación de listado de bares en Bogotá permite a los usuarios:

- Explorar una lista de bares en Bogotá.
- Ver detalles de un bar, incluidas sus ubicación, horario y calificaciones.
- Calificar y revisar bares.
- Filtrar bares por ubicación, categoría y calificación.

## Requisitos de Desarrollo

Asegúrate de tener las siguientes herramientas instaladas antes de configurar y ejecutar el monorepo:

- [Node.js](https://nodejs.org/)
- [Visual Studio Code](https://code.visualstudio.com/)

## Configuración Inicial

Siga estos pasos para configurar el monorepo en su entorno de desarrollo:

1. Clona este repositorio en tu máquina local:

```bash
git clone https://github.com/fabianra5789/books.git
```

2. Accede al directorio del monorepo:

```bash
cd books
```

3. Instala las dependencias del proyecto:

```bash
npm install
# o
yarn
```

## Comandos del `package.json`

El archivo `package.json` en la raíz del monorepo contiene scripts útiles para el desarrollo y la construcción del proyecto. Aquí tienes una explicación de los comandos disponibles:

- `test`: Ejecuta pruebas (actualmente muestra un mensaje de error, debes agregar tus propias pruebas).
- `dev`: Inicia el modo de desarrollo utilizando Turbo Dev.
- `build`: Construye el proyecto utilizando Turbo Build.
- `lint`: Ejecuta el linter para verificar el código en busca de problemas.

## Contribución

Si deseas contribuir a este proyecto, sigue estos pasos:

1. Crea una rama para tu contribución:

```bash
git checkout -b mi-contribucion
```

2. Realiza tus cambios y asegúrate de que todas las pruebas pasen.

3. Realiza un commit de tus cambios:

```bash
git commit -m "Añade nueva funcionalidad"
```

4. Envía tus cambios al repositorio remoto:

```bash
git push origin mi-contribucion
```

5. Abre una solicitud de extracción en GitHub para revisar tus cambios.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para obtener más detalles.
