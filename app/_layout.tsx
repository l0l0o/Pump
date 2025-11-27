import { useFonts } from "expo-font";
import { Tabs } from "expo-router";

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
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          headerTitle: "Home",
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          headerTitle: "Explore",
          headerShown: true,
        }}
      />
    </Tabs>
  );
}
