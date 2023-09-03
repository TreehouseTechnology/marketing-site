import { useMemo } from "react";
import { useColorScheme } from "react-native";
import { ReactNavigationTheme } from "@/constants/themes";

export const useTheme = () => {
  return {
    reactNavigation: ReactNavigationTheme,
  };
};

export const useReactNavigationTheme = () => {
  const scheme = useColorScheme();
  const {
    reactNavigation: { dark, light },
  } = useTheme();

  return useMemo(
    () => (scheme === "dark" ? dark : light),
    [scheme, dark, light]
  );
};

export default useTheme;
