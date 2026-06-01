import { TextInput, StyleSheet } from "react-native/types_generated/index";

const Input = () => {
    return(
        <TextInput style = {InputStyle.Input}></TextInput>
    )

const InputStyle = StyleSheet.create({
    Input: {
        backgoundColor: '#fff'
    },
})
};

export {Input}