import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Transactions } from "./src/containers";

const Stack = createStackNavigator();

const listScreens = [{ name: "Transactions", component: Transactions }];

const screens = listScreens.map(({ name, component }) => (
  <Stack.Screen key={name} name={name} component={component} />
));

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ header: () => null }}>
        {screens}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>oli!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
