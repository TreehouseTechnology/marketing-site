import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Link } from "@react-navigation/native";
import strings from "@/constants/strings";
import { useStyles, UseStylesHookOptions } from "@/hooks/useStyles";

export interface HeaderNavigationBarProps {}

export const HeaderNavigationBar: React.FC<HeaderNavigationBarProps> = () => {
  const styles = useStyles(makeStyles);

  return (
    <View style={styles.container}>
      <Text style={[styles.title, styles.text]}>
        {strings.t("headerNavigation.companyName")}
      </Text>

      <View style={styles.linkContainer}>
        <Link to="/home" style={styles.text}>
          {strings.t("headerNavigation.home")}
        </Link>
        <Link to="/about" style={styles.text}>
          {strings.t("headerNavigation.about")}
        </Link>
        <Link to="/services" style={styles.text}>
          {strings.t("headerNavigation.services")}
        </Link>
        <Link to="/products" style={styles.text}>
          {strings.t("headerNavigation.products")}
        </Link>
      </View>
    </View>
  );
};

const makeStyles: UseStylesHookOptions = (colors) =>
  StyleSheet.create({
    container: {
      flexDirection: "row",
      justifyContent: "space-between",
      paddingVertical: 28,
      paddingHorizontal: 28,
      backgroundColor: colors.card,
    },
    linkContainer: {
      flexDirection: "row",
      columnGap: 30,
    },
    title: {
      fontWeight: "bold",
    },
    text: {
      color: colors.text,
    },
  });

export default HeaderNavigationBar;
