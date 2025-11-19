import React from "react";
import { View, Text, Pressable } from "react-native";
import { useRouter } from "expo-router";

export default function RegisterSuccessScreen() {
  const router = useRouter();

  return (
    <View className="flex-1 justify-center items-center bg-green-50 px-6">
      <View className="items-center">
        <View className="w-24 h-24 bg-green-100 rounded-full items-center justify-center mb-6">
          <Text className="text-5xl">🎉</Text>
        </View>

        <Text className="text-3xl font-bold text-green-600 mb-2">
          ¡Registro Exitoso!
        </Text>

        <Text className="text-lg text-gray-600 text-center mb-2">
          Tu cuenta ha sido creada correctamente
        </Text>
        <Text className="text-base text-gray-500 text-center mb-8">
          Ya puedes iniciar sesión con tus credenciales
        </Text>

        <Pressable
          className="bg-blue-600 py-4 px-8 rounded-xl w-full max-w-sm"
          onPress={() => router.replace("/(auth)/login")}
        >
          <Text className="text-white text-center text-lg font-semibold">
            Ir a Iniciar Sesión
          </Text>
        </Pressable>
      </View>
    </View>
  );
}