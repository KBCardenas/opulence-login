// Importar las librerías necesarias
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bcrypt = require('bcryptjs'); // Librería para encriptar contraseñas
const saltRounds = 10; // Número de rondas para el hashing de contraseñas

// Crear la aplicación Express
const app = express();
app.use(express.json()); // Habilitar parsing de JSON
app.use(express.urlencoded({ extended: true })); // Habilitar parsing de datos de formularios

// Servir archivos estáticos desde el directorio 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Conectar a MongoDB utilizando la base de datos 'usuariosDB'
mongoose.connect('mongodb://localhost:27017/usuariosDB')
    .then(() => console.log('Conectado a MongoDB')) // Confirmación de conexión exitosa
    .catch(err => console.log('Error al conectar a MongoDB:', err)); // Manejo de errores

// Definir el esquema y modelo de Usuario para MongoDB
const usuarioSchema = new mongoose.Schema({
    nombre: String,
    correo: String,
    telefono: String,
    nombreUsuario: String,
    contrasena: String, // Contraseña encriptada
    direccion: String,
    rol: { type: String, default: 'cliente' }, // El rol predeterminado es 'cliente'
    fechaRegistro: { type: Date, default: Date.now }, // Fecha de registro automática
    infoPago: String
});

const Usuario = mongoose.model('Usuario', usuarioSchema); // Crear el modelo Usuario

// Ruta para el registro de usuarios
app.post('/signup', async (req, res) => {
    try {
        // Verificar si las contraseñas coinciden
        if (req.body.password !== req.body.confirmPassword) {
            return res.status(400).send('Las contraseñas no coinciden');
        }

        // Encriptar la contraseña antes de guardar
        const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);

        // Crear un nuevo usuario con los datos del formulario
        const nuevoUsuario = new Usuario({
            nombre: req.body.name,
            correo: req.body.emailOrPhone,
            telefono: req.body.emailOrPhone,
            nombreUsuario: req.body.username,
            contrasena: hashedPassword, // Almacenar la contraseña encriptada
            direccion: req.body.address, 
            infoPago: req.body.paymentInfo 
        });

        // Guardar el nuevo usuario en la base de datos
        await nuevoUsuario.save();
        res.send('Usuario registrado con éxito');
    } catch (err) {
        res.status(500).send('Error al registrar el usuario: ' + err.message); // Manejo de errores
    }
});

// Ruta para el inicio de sesión de usuarios
app.post('/login', async (req, res) => {
    try {
        // Buscar al usuario en la base de datos usando el correo o teléfono
        const usuario = await Usuario.findOne({
            $or: [
                { correo: req.body.emailOrPhone },
                { telefono: req.body.emailOrPhone }
            ]
        });

        // Verificar si el usuario existe
        if (!usuario) {
            return res.status(401).send('Usuario no encontrado');
        }

        // Comparar la contraseña ingresada con la almacenada
        const match = await bcrypt.compare(req.body.password, usuario.contrasena);
        if (match) {
            res.send('Autenticación satisfactoria');
        } else {
            res.status(401).send('Contraseña incorrecta');
        }
    } catch (err) {
        res.status(500).send('Error en la autenticación: ' + err.message); // Manejo de errores
    }
});

// Iniciar el servidor en el puerto 3000
app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});
