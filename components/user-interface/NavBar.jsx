import { StyleSheet, Text, View } from "react-native";

const NavBar = () => {
  return (
    <View style={styles.container}>
      <Text>navigation bar</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f3f3f3",
    position: "fixed",
    bottom: "0",
    left: "0",
  },
});

export default NavBar;
