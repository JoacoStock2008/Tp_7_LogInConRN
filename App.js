import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import LogIn from './src/views/LogIn';
import { Header } from './src/components/Header'

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.pantallaPrincipal}>
        <View style={styles.container}>
          <StatusBar style='#c300ff' />
          <Header />
          <Image
            source={require("./assets/cocaCola.png")}
            resizeMode='contain'
            style={styles.mainImage}
          ></Image>
          <LogIn />
          <Text style={styles.textos}>Olvidaste la clave?</Text>
          <Text style={styles.textos}>Crear Cuenta</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
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
  mainImage: {
    width: "100%",
    height: 200,
    marginBottom: "20%",
  },
});
