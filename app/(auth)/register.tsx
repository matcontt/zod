import React, { useState } from "react";
import { View, Text, Pressable, KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import { Link, useRouter } from "expo-router";
import CustomInput from "../../components/CustomInput";
import { RegisterSchema } from "../../lib/schemas";
import { AuthTexts } from "../../constants/auth";

// Tipo para rutas (si persiste el error de tipado)
type CustomRoute = "/(success)/registerSuccess";

export default function RegisterScreen() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof typeof form, string>>>({});
  const router = useRouter();

  const handleSubmit = () => {
    setErrors({});
    const result = RegisterSchema.safeParse(form);
    if (!result.success) {
      const newErrors = result.error.issues.reduce(
        (acc, issue) => ({ ...acc, [issue.path[0]]: issue.message }),
        {}
      );
      setErrors(newErrors);
    } else {
      const path: CustomRoute = "/(success)/registerSuccess";
      router.push(path);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "padding"} // Cambiado a "padding" para Android
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20} // Offset adicional para Android
      className="flex-1"
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled" // Permite toques en botones con teclado abierto
      >
        <View className="flex-1 justify-center px-6 py-8 bg-white">
          <View className="max-w-md mx-auto">
            <Text className="text-3xl font-bold text-center mb-6">{AuthTexts.REGISTER}</Text>
            <CustomInput
              placeholder={AuthTexts.NAME}
              value={form.name}
              onChangeText={(text) => setForm({ ...form, name: text })}
              error={errors.name}
            />
            <CustomInput
              placeholder={AuthTexts.EMAIL}
              value={form.email}
              onChangeText={(text) => setForm({ ...form, email: text })}
              error={errors.email}
            />
            <CustomInput
              placeholder={AuthTexts.PASSWORD}
              value={form.password}
              onChangeText={(text) => setForm({ ...form, password: text })}
              secureTextEntry
              error={errors.password}
            />
            <CustomInput
              placeholder="Confirmar Contraseña"
              value={form.confirmPassword}
              onChangeText={(text) => setForm({ ...form, confirmPassword: text })}
              secureTextEntry
              error={errors.confirmPassword}
            />
            <Pressable className="bg-blue-600 py-3 rounded-lg mt-4" onPress={handleSubmit}>
              <Text className="text-white text-center text-lg">{AuthTexts.REGISTER}</Text>
            </Pressable>
            <Text className="text-center mt-4 text-gray-600">
              {AuthTexts.NO_ACCOUNT}
              <Link href="/(auth)/login" className="text-blue-600">
                {AuthTexts.LOGIN}
              </Link>
            </Text>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}