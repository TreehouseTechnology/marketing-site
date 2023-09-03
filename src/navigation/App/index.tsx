import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HeaderNavigationBar } from "@/components/HeaderNavigationBar";
import { NotFound } from "@/components/NotFound";
import About from "@/containers/About";
import { Home } from "@/containers/Home";
import { Products } from "@/containers/Products";
import { Services } from "@/containers/Services";
import { AppParamList } from "../types";

const AppStack = createNativeStackNavigator<AppParamList>();

export const App = () => {
  return (
    <AppStack.Navigator
      screenOptions={{
        header: () => <HeaderNavigationBar />,
        // headerBackButtonMenuEnabled: false,
        // headerBackVisible: false,
      }}
    >
      <AppStack.Screen name="Home" component={Home} />
      <AppStack.Screen name="About" component={About} />
      <AppStack.Screen name="Services" component={Services} />
      <AppStack.Screen name="Products" component={Products} />

      <AppStack.Screen name="NotFound" component={NotFound} />
    </AppStack.Navigator>
  );
};

export default App;
