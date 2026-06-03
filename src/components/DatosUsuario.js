import { TextInput, StyleSheet } from "react-native";

const Input = ({placeholder}) => {
    return(
        <TextInput 
            style = {styles.Input} 
            placeholder = {placeholder} 
            placeholderTextColor = '#000000'>
        </TextInput>
    )
};

const styles = StyleSheet.create({
    Input: {
        backgroundColor: '#aca7a7',
        borderWidth: 1,
        borderColor: "#c300ff",
        borderRadius: 8,  
        padding: "20%",
        marginBottom: 20
    },
})

export {Input}