# Zod Gemini Expo App 👋

Este es un proyecto de [Expo](https://expo.dev) creado con [`create-expo-app`](https://www.npmjs.com/package/create-expo-app) para el módulo de **Programación Móvil** (Bachillerato, Área Informática, Curso Tercero, Año Lectivo 2025-2026). Este proyecto implementa un módulo de autenticación completo (Registro e Inicio de Sesión) utilizando React Native, Tailwind CSS (vía NativeWind), y validación de esquemas con Zod, siguiendo los criterios de evaluación establecidos para el primer trimestre.

> Editado para uso en IDX el 05/11/2025

## Descripción del Proyecto

La **Zod Gemini Expo App** es una aplicación móvil que ofrece una experiencia de usuario fluida para el registro e inicio de sesión. Incluye:
- **Registro (Sign Up)**: Permite ingresar Nombre, Correo Electrónico, Contraseña y Confirmación de Contraseña, con validación estricta usando Zod.
- **Inicio de Sesión (Log In)**: Permite ingresar Correo Electrónico y Contraseña, también validado con Zod.
- **Navegación**: Utiliza Expo Router para transiciones entre pantallas, simulando éxito con pantallas de confirmación.
- **UX Mejorada**: Implementa `KeyboardAvoidingView` y `ScrollView` para asegurar que el teclado no oculte campos o botones en Android y iOS.

El diseño es moderno, con estilos gestionados exclusivamente mediante Tailwind CSS, y cuenta con un componente reutilizable (`CustomInput`) para los formularios.

## Requisitos Previos

- **Node.js**: Versión 14.x o superior.
- **Expo CLI**: Instala globalmente con `npm install -g expo-cli`.
- **Emulador o Dispositivo**: Android Emulator (via Android Studio) o Expo Go en un dispositivo físico.
- **Git**: Para clonar y gestionar el repositorio.

## Instalación

Sigue estos pasos para configurar y ejecutar el proyecto en tu entorno:



https://github.com/user-attachments/assets/51e45903-a795-4845-957c-52f4851729ff


### 1. Clona el Repositorio
```bash
git clone https://github.com/matcontt/zod.git
cd zod
