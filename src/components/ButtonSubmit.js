import { Pressable, Text, StyleSheet } from "react-native";

const ButtonSubmit = ({ title }) => {
  return (
    <Pressable style={styles.button}>
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
  },
  text: {
    color: "white",
    fontWeight: "bold",
  },
});

export default ButtonSubmit;