import { Text, View, StyleSheet } from "react-native";

export default function AboutScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>This is the About Screen.</Text>
            <Text style={styles.text}>Welcome to StickerSmash!</Text>
            <Text style={styles.text}>This is so basic!</Text>
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
});