import { TextInput, StyleSheet } from "react-native";

const Input = ({placeholder}) => {
    return(
        <TextInput style = {styles.Input} placeholder = {placeholder} placeholderTextColor = '#000000'></TextInput>
    )
};

const styles = StyleSheet.create({
    Input: {
        backgroundColor: '#aca7a7',
        borderColor: '#c300ff',
        padding: 10
    },
})

export {Input}