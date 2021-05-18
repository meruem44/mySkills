import React from "react";
import {
  View,
  StyleSheet,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from "react-native";

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, Leandro</Text>

      <TextInput
        placeholder="new skill"
        placeholderTextColor="#555"
        style={styles.input}
      />

      <TouchableOpacity activeOpacity={0.8} style={styles.button}>
        <Text style={styles.textButton}>Add</Text>
      </TouchableOpacity>

      <Text style={[styles.title, { marginTop: 40 }]}>My skills</Text>
    </View>
  );
};

export { Home };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121015",
    paddingHorizontal: 30,
    paddingVertical: 70,
  },
  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "#1f1e25",
    color: "#fff",
    fontSize: 18,
    padding: 15,
    marginTop: 30,
    borderRadius: 7,
  },
  button: {
    backgroundColor: "#a370f7",
    padding: 15,
    borderRadius: 7,
    alignItems: "center",
    marginTop: 20,
  },
  textButton: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "bold",
  },
});
