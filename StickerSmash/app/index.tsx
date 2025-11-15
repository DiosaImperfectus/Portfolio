import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello World! It's Avian Diosa.</Text>
      <Text style={styles.text}>Gio, really, you SAT on my clean sheets!</Text>
      <Link href="/about" style={styles.button}>
        Go to About Screen
      </Link>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000d34ff",
    alignItems: "center",
  },
  text: {
    color: "#ffffff",
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#ffffff',
}});