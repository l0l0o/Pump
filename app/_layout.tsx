import { UserProvider } from "@/context/userContext";
import { useFonts } from "expo-font";
import { Tabs } from "expo-router";
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
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar style="dark" />
        <Tabs
          screenOptions={{
            headerShown: false,
          }}
        >
          <Tabs.Screen
            name="home/index"
            options={{
              headerTitle: "Home",
              headerShown: false,
            }}
          />
          <Tabs.Screen
            name="seances/seances"
            options={{
              headerTitle: "Explore",
              headerShown: false,
            }}
          />
        </Tabs>
      </SafeAreaView>
    </UserProvider>
  );
}
