import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

//To force app to ignore warning boxes, uses the following code:
//import { LogBox } from 'react-native';
// LogBox.ignoreAllLogs(true);

//C:\Program Files\Android\Android Studio

export default function RootLayout() {
  return (
    <>
      <StatusBar style="auto" />
      <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{
          headerShown: false,
          }}
        />
        <Stack.Screen
          name="+not-found"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </>
  );
}
