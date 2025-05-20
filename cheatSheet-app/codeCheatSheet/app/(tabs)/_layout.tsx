import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{tabBarActiveTintColor: "#fa03b5",
        headerStyle: { backgroundColor: "#fff" },
        headerTintColor: "#031a44",
        tabBarStyle: { backgroundColor: "#031a44" },
        headerShadowVisible: false,
      }}
      >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({focused, color}) => (
            <Ionicons 
            name={focused ? "home-sharp" : "home-outline"} 
            size={24} 
            color="#fa03b5" />
          ),
          //headerStyle: { backgroundColor: "#fff" },
          //headerTintColor: "#031a44",
          //headerTitleStyle: { fontWeight: "bold" },
          //headerLeft: () => null,
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: "About",
         tabBarIcon: ({focused, color}) => (
            <Ionicons 
            name={focused ? "information-circle" : "information-circle-outline"} 
            size={24} 
            color="#fa03b5" />
          ),
        }}
      />
      <Tabs.Screen
        name="+not-found"
        options={{
          headerShown: false,
        }}
      />
    </Tabs>
  );
}
