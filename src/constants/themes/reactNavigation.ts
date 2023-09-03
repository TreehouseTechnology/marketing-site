import { DefaultTheme, DarkTheme, Theme } from "@react-navigation/native";
import colors from "./colors";

const dark: Theme = {
  dark: true,
  colors: {
    ...DarkTheme.colors,
    background: colors.darkBackground,
  },
};

const light: Theme = {
  dark: false,
  colors: {
    ...DefaultTheme.colors,
  },
};

export { dark, light };
