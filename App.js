import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator, HeaderTitle } from "@react-navigation/stack"
import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { Provider } from "react-redux"
import myStore from "./src/Redux/Store"

//!Pages
import Home from "./src/Screens/Home"
import SecondPage from "./src/Screens/SecondPage"

export default function App() {
  var Stack = createStackNavigator()
  return (
    <Provider store={myStore}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SecondPage"
            component={SecondPage}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
})
