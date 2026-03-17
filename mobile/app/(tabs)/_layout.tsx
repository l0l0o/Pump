import { COLORS } from "@/style/COLORS";
import { FONT } from "@/style/FONT";
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
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
  );
}
