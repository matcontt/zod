import React, { useState } from "react";
import { View, Text, Pressable, KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import { Link, useRouter } from "expo-router";
import CustomInput from "../../components/CustomInput";
import { LoginSchema } from "../../lib/schemas";
import { AuthTexts } from "../../constants/auth";

// Tipo para rutas (si persiste el error de tipado)
type CustomRoute = "/(success)/loginSuccess";

export default function LoginScreen() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState<Partial<Record<keyof typeof form, string>>>({});
  const router = useRouter();

  const handleSubmit = () => {
    setErrors({});
    const result = LoginSchema.safeParse(form);
    if (!result.success) {
      const newErrors = result.error.issues.reduce(
        (acc, issue) => ({ ...acc, [issue.path[0]]: issue.message }),
        {}
      );
      setErrors(newErrors);
    } else {
      const path: CustomRoute = "/(success)/loginSuccess";
      router.push(path);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "padding"} // Cambiado a "padding" para Android
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20} // Offset adicional para Android (ajusta según tu diseño)
      className="flex-1"
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled" // Permite toques en botones con teclado abierto
      >
        <View className="flex-1 justify-center px-6 py-8 bg-white">
          <View className="max-w-md mx-auto">
            <Text className="text-3xl font-bold text-center mb-6">{AuthTexts.LOGIN}</Text>
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
            <Pressable className="bg-blue-600 py-3 rounded-lg mt-4" onPress={handleSubmit}>
              <Text className="text-white text-center text-lg">{AuthTexts.LOGIN}</Text>
            </Pressable>
            <Text className="text-center mt-4 text-gray-600">
              {AuthTexts.NO_ACCOUNT}
              <Link href="/(auth)/register" className="text-blue-600">
                {AuthTexts.SIGN_UP}
              </Link>
            </Text>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}