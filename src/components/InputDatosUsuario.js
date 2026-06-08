import { TextInput, StyleSheet } from "react-native";

const Input = ({placeholder}) => {
    return(
        <TextInput 
            style = {styles.Input} 
            placeholder = {placeholder} 
            placeholderTextColor = '#000000'
            keyboardType='email-address'>
        </TextInput>
    )
};

const styles = StyleSheet.create({
    Input: {
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderColor: "#c300ff",
        borderRadius: 8,  
        padding: "3%",
        paddingRight: "15%",
        paddingLeft: "15%",
        marginBottom: 20
    },
})

export {Input}