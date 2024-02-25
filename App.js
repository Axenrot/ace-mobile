import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./pages/Home";
import Store from "./pages/Store";
import Profile from "./pages/Profile";
import NavBar from "./components/user-interface/NavBar";
import HomeHeader from "./components/HomeHeader";

const Stack = createNativeStackNavigator();

export default function App() {
  console.log(Stack);
  return (
    <NavigationContainer>
      <StatusBar style="dark" />

      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "Acelera Peças",
            headerTitle: () => <HomeHeader />,
            headerStyle: {
              backgroundColor: "#ff0708",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{
            title: "Perfil",
            headerStyle: {
              backgroundColor: "#ff0708",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="Store"
          component={Store}
          options={{
            title: "Loja",
            headerStyle: {
              backgroundColor: "#ff0708",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
      </Stack.Navigator>
      <NavBar />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f3f3",
    alignItems: "center",
    justifyContent: "center",
  },
});
