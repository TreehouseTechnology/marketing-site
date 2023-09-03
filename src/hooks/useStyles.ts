import { useMemo } from "react";
import { StyleSheet, ColorValue } from "react-native";
import { useTheme } from "@react-navigation/native";

type Styles = ReturnType<typeof StyleSheet.create>;

export type UseStylesHookOptions = (
  colors: Record<string, ColorValue>
) => Styles;

export type UseStyleHook = (options: UseStylesHookOptions) => Styles;

export const useStyles: UseStyleHook = (makeStyles) => {
  const { colors } = useTheme();
  return useMemo(() => makeStyles(colors), [colors, makeStyles]);
};

export default useStyles;
