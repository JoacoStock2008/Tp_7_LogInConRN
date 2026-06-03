import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Input } from '../components/DatosUsuario';

const LogIn = () => {

    return(
        <View>
            <Text>Hola cómo estás?</Text>
            <Input placeholder="nombreExample@gmail.com"/>
            <Input placeholder="**********"/>
        </View>
    )
}

export {LogIn}