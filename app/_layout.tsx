import { Stack } from "expo-router";
import "./global.css"; // Tu archivo CSS global

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="(auth)/login" options={{ headerShown: false }} />
      <Stack.Screen name="(auth)/register" options={{ headerShown: false }} />
    </Stack>
  );
}