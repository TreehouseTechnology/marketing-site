import React, { useMemo } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useTheme } from "@react-navigation/native";
import strings from "@/constants/strings";

export interface ServicesProps {}

export const Services: React.FC<ServicesProps> = () => {
  const { colors } = useTheme();
  const styles = useMemo(() => makeStyles(colors), [colors]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{strings.t("services.title")}</Text>
      <Text style={styles.detail}>{strings.t("services.detail")}</Text>
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

export default Services;
