import { Stack } from "expo-router";
import "@/global.css";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="(auth)/login" options={{ headerShown: false }} />
      <Stack.Screen name="(auth)/register" options={{ headerShown: false }} />
      <Stack.Screen name="(success)/loginSuccess" options={{ headerShown: false }} />
      <Stack.Screen name="(success)/registerSuccess" options={{ headerShown: false }} />
    </Stack>
  );
}