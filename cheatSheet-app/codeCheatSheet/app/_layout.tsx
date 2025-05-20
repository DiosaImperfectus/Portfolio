import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Home",
          headerStyle: { backgroundColor: "#fff" },
          headerTintColor: "#031a44",
          headerTitleStyle: { fontWeight: "bold" },
        }}
      />
      <Stack.Screen
        name="about"
        options={{
          title: "About",
          headerStyle: { backgroundColor: "#fff" },
          headerTintColor: "#031a44",
          headerTitleStyle: { fontWeight: "bold" },
        }}
      />
    </Stack>
  );
}
