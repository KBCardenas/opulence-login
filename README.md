Proyecto de Registro e Inicio de Sesión
Este proyecto es una API que permite registrar usuarios e iniciar sesión. Utiliza MongoDB para el almacenamiento de datos y bcryptjs para la encriptación de contraseñas.
📋 Requisitos

Node.js v20.14.0 o superior
MongoDB (debe estar corriendo localmente o en la nube)
npm (el gestor de paquetes de Node.js)

🚀 Instalación
Sigue estos pasos para clonar y ejecutar el proyecto localmente:

Clona el repositorio:
bashCopygit clone https://github.com/usuario/repositorio.git

Entra en la carpeta del proyecto:
bashCopycd nombre-del-proyecto

Instala las dependencias necesarias:
bashCopynpm install express mongoose bcryptjs
Este comando instalará las librerías necesarias para ejecutar la aplicación:

express: Para crear el servidor web.
mongoose: Para interactuar con la base de datos MongoDB.
bcryptjs: Para encriptar las contraseñas.


Asegúrate de que MongoDB esté corriendo en tu sistema local o en la nube (por ejemplo, en MongoDB Atlas). Si estás usando una base de datos en la nube, actualiza la URL de conexión en el archivo server.js.
Ejecuta el servidor:
bashCopynode server.js
El servidor debería estar corriendo en http://localhost:3000.

🔧 Uso
Registro de usuarios
Envía una solicitud POST a http://localhost:3000/signup con los siguientes campos en el cuerpo (en formato JSON):
jsonCopy{
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
jsonCopy{
    "emailOrPhone": "correo@example.com o número de teléfono",
    "password": "contraseña"
}
Si la autenticación es correcta, recibirás un mensaje de "Autenticación satisfactoria". De lo contrario, recibirás un mensaje de error.
📝 Notas

Asegúrate de que MongoDB esté corriendo en tu máquina o en la nube.
Las contraseñas se encriptan antes de almacenarse en la base de datos.

🤝 Contribución
Si deseas contribuir al proyecto, crea un fork, realiza los cambios y abre un Pull Request. ¡Todas las contribuciones son bienvenidas!
📄 Licencia
Este proyecto está licenciado bajo la MIT License.




