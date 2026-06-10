import { ImageBackground, Text, View, StyleSheet } from "react-native";

const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>Login App (Stock, Grinfeld)</Text>
        </View>
    )
}
export { Header }

const styles = StyleSheet.create({
    header: {
        width: "100%",
        height: "5%",
        backgroundColor: "#c300ff",
        marginBottom: "30%",
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 600,
        color: '#ffffff',
    }
})