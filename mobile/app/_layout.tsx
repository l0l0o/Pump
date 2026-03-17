import { UserProvider } from "@/context/userContext";
import { COLORS } from "@/style/COLORS";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  const [loaded] = useFonts({
    "InriaSans-Bold": require("../assets/fonts/InriaSans-Bold.ttf"),
    "InriaSans-BoldItalic": require("../assets/fonts/InriaSans-BoldItalic.ttf"),
    "InriaSans-Italic": require("../assets/fonts/InriaSans-Italic.ttf"),
    "InriaSans-Light": require("../assets/fonts/InriaSans-Light.ttf"),
    "InriaSans-LightItalic": require("../assets/fonts/InriaSans-LightItalic.ttf"),
    "InriaSans-Regular": require("../assets/fonts/InriaSans-Regular.ttf"),
  });

  if (!loaded) return null;

  return (
    <UserProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
        <StatusBar style="dark" />
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(tabs)" />
          <Stack.Screen name="creer-seance" />
          <Stack.Screen name="ajouter-exercice" />
        </Stack>
      </SafeAreaView>
    </UserProvider>
  );
}
