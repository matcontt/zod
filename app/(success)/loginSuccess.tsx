import React, { useState, useEffect } from "react";
import { View, Text, Pressable, ActivityIndicator } from "react-native";
import { useRouter } from "expo-router";
import { StorageService, User } from "../../lib/storage";

export default function LoginSuccessScreen() {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    try {
      const currentUser = await StorageService.getCurrentUser();
      setUser(currentUser);
    } catch (error) {
      console.error("Error loading user:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await StorageService.logout();
      router.replace("/(auth)/login");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  if (isLoading) {
    return (
      <View className="flex-1 justify-center items-center bg-white">
        <ActivityIndicator size="large" color="#2563eb" />
      </View>
    );
  }

  return (
    <View className="flex-1 justify-center items-center bg-green-50 px-6">
      <View className="items-center">
        <View className="w-24 h-24 bg-green-100 rounded-full items-center justify-center mb-6">
          <Text className="text-5xl">✓</Text>
        </View>

        <Text className="text-3xl font-bold text-green-600 mb-2">
          ¡Bienvenido!
        </Text>

        {user && (
          <View className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-sm mb-6">
            <Text className="text-lg text-gray-600 mb-2">
              <Text className="font-semibold">Nombre:</Text> {user.name}
            </Text>
            <Text className="text-lg text-gray-600">
              <Text className="font-semibold">Email:</Text> {user.email}
            </Text>
          </View>
        )}

        <Text className="text-lg text-gray-600 text-center mb-8">
          Has iniciado sesión correctamente
        </Text>

        <View className="w-full max-w-sm">
          <Pressable
            className="bg-red-600 py-4 rounded-xl"
            onPress={handleLogout}
          >
            <Text className="text-white text-center text-lg font-semibold">
              Cerrar Sesión
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}