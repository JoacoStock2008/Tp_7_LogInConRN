import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import LogIn from './src/views/LogIn';
import { Header } from './src/components/Header'

export default function App() {
  return (
    <SafeAreaView style={styles.pantallaPrincipal}>

      <View style={styles.container}>
        <StatusBar style='auto' />
        <Header />
          <LogIn />
          <Text style={styles.textos}>Olvidaste la clave?</Text>
          <Text style={styles.textos}>Crear Cuenta</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  pantallaPrincipal: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#000000',
    width: "100%",
  },
  textos: {
    marginTop: "3%",
  },
});
