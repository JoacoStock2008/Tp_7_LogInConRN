import { StyleSheet, Text, View, TextInput, ImageComponent } from 'react-native';
import { Input } from '../components/InputDatosUsuario';
import { SafeAreaView } from 'react-native-safe-area-context'
import { useState, useEffect } from 'react';
import { ButtonSubmit } from '../components/ButtonSubmit'

const LogIn = () => {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')


    return (

            <View>
                <Input value={name} placeholder="nombreExample@gmail.com" />
                <Input value={password} placeholder="**********" />
                <ButtonSubmit title="Enviar" />
            </View>
    
    )
}

export default LogIn 

const styles = StyleSheet.create({
    pantallaPrincipal: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#000000',
        width: "100%"
    }
})
