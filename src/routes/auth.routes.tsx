import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Become } from "../screens/Become";
import { Choose } from "../screens/Choose";
import { Signin } from "../screens/Signin";
import { Login } from "../screens/Login";

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: "transparent",
        },
      }}
    >
      <Screen name="Become" component={Become} />
      <Screen name="Choose" component={Choose} />

      <Screen name="Login" component={Login} />

      <Screen name="Signin" component={Signin} />
    </Navigator>
  );
}