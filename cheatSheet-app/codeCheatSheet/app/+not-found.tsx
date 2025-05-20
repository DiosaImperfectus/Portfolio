import { Link, Stack } from 'expo-router';
import { Text, View,  StyleSheet } from 'react-native';

export default function NotFoundScreen() {
  return (
    <>
     <Stack.Screen options={{ title: 'Opps! Page Not Found' }} />
    <View style={styles.container}>
        <Text style={styles.text}>Oops! Page Not Found!</Text>
      <Link href="/" style={styles.button}>
      Return to Home Screen!
    </Link>
    </View>
    </> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#031a44',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    marginBottom: 20,
  },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#fff',
    color: '#031a44',
    borderRadius: 5,
    borderLineWidth: 2,
    borderColor: '#031a44',
    fontWeight: 'bold',
    textAlign: 'center',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
});
