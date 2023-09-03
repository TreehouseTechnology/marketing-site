import React, { useMemo } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useTheme } from "@react-navigation/native";
import strings from "@/constants/strings";

export interface ComingSoonProps {
  title?: string;
  detail?: string;
}

export const ComingSoon: React.FC<ComingSoonProps> = ({
  title = strings.t("comingSoon.title"),
  detail = strings.t("comingSoon.detail"),
}) => {
  const { colors } = useTheme();
  const styles = useMemo(() => makeStyles(colors), [colors]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.detail}>{detail}</Text>
    </View>
  );
};

const makeStyles = (colors: Record<string, string>) =>
  StyleSheet.create({
    container: {
      backgroundColor: colors.background,
      padding: 28,
    },
    title: {
      color: colors.text,
      fontWeight: "bold",
      fontSize: 48,
    },
    detail: {
      color: colors.text,
    },
  });

export default ComingSoon;
