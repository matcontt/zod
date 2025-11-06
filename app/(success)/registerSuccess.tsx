import React from "react";
import { View, Text } from "react-native";
import { Link } from "expo-router";

export default function RegisterSuccessScreen() {
  return (
    <View className="flex-1 justify-center items-center bg-white">
      <Text className="text-2xl font-bold text-green-600">¡Registro Exitoso!</Text>
      <Text className="mt-4 text-lg text-gray-600">Tu cuenta ha sido creada.</Text>
      <Link href="/(auth)/login" className="mt-6 text-blue-600 underline">
        Ir a Iniciar Sesión
      </Link>
  </View>
  );
}