import { StyleSheet, Text, View, TextInput, ImageComponent } from 'react-native';
import { Input } from '../components/InputDatosUsuario';
import { useState, useEffect } from 'react';
import ButtonSubmit from '../components/ButtonSubmit'

const LogIn = () => {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    const handleChange = () => {

    }
    return (

        <View>
            <Input value={name} keyboardType='email-adress' placeholder="nombreExample@gmail.com" />
            <Input value={password} keyboardType='default' placeholder="**********" />
            <ButtonSubmit title="Ingresar" />
        </View>

    )
}

export default LogIn
