import { StyleSheet, Text, View, TextInput, ImageComponent } from 'react-native';
import { Input } from '../components/InputDatosUsuario';
import { useState, useEffect } from 'react';
import ButtonSubmit from '../components/ButtonSubmit'

const LogIn = () => {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')


    return (

        <View>
            <Input value={name} placeholder="nombreExample@gmail.com" />
            <Input value={password} placeholder="**********" />
            <ButtonSubmit title="Ingresar" />
        </View>

    )
}

export default LogIn
