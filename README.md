# Proyecto de Registro e Inicio de Sesión

Este proyecto es una API que permite registrar usuarios e iniciar sesión. Utiliza MongoDB para el almacenamiento de datos y bcryptjs para la encriptación de contraseñas.

## Requisitos

- Node.js v20.14.0 o superior
- MongoDB (debe estar corriendo localmente o en la nube)
- npm (el gestor de paquetes de Node.js)

## Instalación

Sigue estos pasos para clonar y ejecutar el proyecto localmente:

1. **Clona el repositorio**:
    ```bash
    git clone https://github.com/usuario/repositorio.git
    ```

2. **Entra en la carpeta del proyecto**:
    ```bash
    cd nombre-del-proyecto
    ```

3. **Instala las dependencias necesarias**:
    ```bash
    npm install express mongoose bcryptjs
    ```

    Este comando instalará las librerías necesarias para ejecutar la aplicación:
    - `express`: Para crear el servidor web.
    - `mongoose`: Para interactuar con la base de datos MongoDB.
    - `bcryptjs`: Para encriptar las contraseñas.

4. **Asegúrate de que MongoDB esté corriendo** en tu sistema local o en la nube (por ejemplo, en [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)). Si estás usando una base de datos en la nube, actualiza la URL de conexión en el archivo `server.js`.

5. **Ejecuta el servidor**:
    ```bash
    node server.js
    ```

   El servidor debería estar corriendo en `http://localhost:3000`.

## Uso

### Registro de usuarios

Envía una solicitud `POST` a `http://localhost:3000/signup` con los siguientes campos en el cuerpo (en formato JSON):

```json
{
    "name": "Tu nombre",
    "emailOrPhone": "correo@example.com o número de teléfono",
    "username": "nombredeusuario",
    "password": "contraseña",
    "confirmPassword": "contraseña",
    "address": "Tu dirección",
    "paymentInfo": "Información de pago"
}

Inicio de sesión
Envía una solicitud POST a http://localhost:3000/login con los siguientes campos en el cuerpo (en formato JSON):

JSON
{
    "emailOrPhone": "correo@example.com o número de teléfono",
    "password": "contraseña"
}

Notas

1. Asegúrate de que MongoDB esté corriendo en tu máquina o en la nube.
2. Las contraseñas se encriptan antes de almacenarse en la base de datos.


Contribución

Si deseas contribuir al proyecto, crea un fork, realiza los cambios y abre un Pull Request. ¡Todas las contribuciones son bienvenidas!

Licencia
Este proyecto está licenciado bajo la MIT License.




