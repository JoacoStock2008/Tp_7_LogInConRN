import { Pressable, Text, StyleSheet } from "react-native";

const ButtonSubmit = ({ title }) => {
  return (
    <Pressable style={({ pressed }) => [
        styles.button,
        pressed ? styles.botonPresionado : null
      ]}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#c300ff",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
  },
  text: {
    color: "white",
    fontWeight: "bold",
  },
  botonPresionado: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0,
    shadowRadius: 0,
  },
});

export default ButtonSubmit;