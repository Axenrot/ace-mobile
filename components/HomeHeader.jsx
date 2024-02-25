import { StyleSheet, Text, TextInput, View } from "react-native";

const HomeHeader = () => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Busca o que precisa..."
      ></TextInput>
      <Text></Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: "100%",
    padding: 4,
    marginTop: "auto",
    right: 16,
  },
  input: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 1,
    borderRadius: 5,
    color: "white",
    borderTopRightRadius: 0,
    width: "100%",
    borderBottomRightRadius: 0,
  },
});

export default HomeHeader;
