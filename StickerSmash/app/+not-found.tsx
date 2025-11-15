import { Text, View, StyleSheet } from "react-native";
import { Link, Stack } from "expo-router";

export default function NotFoundScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Oops!!!</Text>
            <Text style={styles.text}>Page NOT FOUND.</Text>
            <Link href="/" style={styles.button}>Go to Home Screen</Link>
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
}
});