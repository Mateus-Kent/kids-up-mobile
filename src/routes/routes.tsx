import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Become } from "../screens/Become";
import { Choose } from "../screens/Choose";
import { Signin } from "../screens/Signin";
import { Login } from "../screens/Login";
import { MainScreen } from "../screens/MainScreen";
import { SelectPhoto } from "../screens/SelectPhoto";
import { Config } from "../screens/Config";
import { EditProfile } from "../screens/EditProfile";
import { ChangePassword } from "../screens/ChangePassword";
import { Chat } from "../screens/Chat";
import { AddContact } from "../screens/AddContact";

const { Navigator, Screen } = createStackNavigator();

export function AllRoutes() {
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

      <Screen name="SelectPhoto" component={SelectPhoto} />

      <Screen name="MainScreen" component={MainScreen} />

      <Screen name="Config" component={Config} />

      <Screen name="EditProfile" component={EditProfile} />

      <Screen name="ChangePassword" component={ChangePassword} />

      <Screen name="Chat" component={Chat} />

      <Screen name="AddContact" component={AddContact} />
    </Navigator>
  );
}
