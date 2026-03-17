import { UserProvider } from "@/context/userContext";
import { COLORS } from "@/style/COLORS";
import { FONT } from "@/style/FONT";
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
            tabBarActiveTintColor: COLORS.main,
            tabBarInactiveTintColor: COLORS.greyLighter,
            tabBarStyle: {
              borderTopColor: COLORS.greyLightest,
            },
            tabBarLabelStyle: {
              fontFamily: FONT.family.regular,
              fontSize: FONT.size.xs,
            },
          }}
        >
          <Tabs.Screen
            name="home/index"
            options={{
              headerShown: false,
              tabBarLabel: "Accueil",
            }}
          />
          <Tabs.Screen
            name="exercices/index"
            options={{
              href: null,
            }}
          />
          <Tabs.Screen
            name="seances/index"
            options={{
              headerShown: false,
              tabBarLabel: "Séances",
            }}
          />
        </Tabs>
      </SafeAreaView>
    </UserProvider>
  );
}
