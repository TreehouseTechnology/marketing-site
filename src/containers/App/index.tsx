import React, { PropsWithChildren } from "react";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import strings from "@/constants/strings";
import { useReactNavigationTheme } from "@/hooks/useTheme";
import { App as AppNavigator } from "@/navigation/App";
import linking from "@/navigation/linking";

export const UIProvider: React.FC<PropsWithChildren<unknown>> = ({
  children,
}) => <SafeAreaProvider>{children}</SafeAreaProvider>;

export const App: React.FC<unknown> = () => {
  const theme = useReactNavigationTheme();

  console.log("Fuck you");

  return (
    <UIProvider>
      <NavigationContainer
        linking={linking}
        theme={theme}
        fallback={
          <Text style={{ color: theme.colors.text }}>
            {strings.t("fallback.title")}
          </Text>
        }
      >
        <AppNavigator />
      </NavigationContainer>
    </UIProvider>
  );
};

export default App;
