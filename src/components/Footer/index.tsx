import React from "react";
import { StyleSheet, Text, View } from "react-native";
import strings from "@/constants/strings";
import useStyles from "@/hooks/useStyles";

export interface FooterProps {}

export const Footer: React.FC<FooterProps> = () => {
  const styles = useStyles(makeStyles);

  return (
    <View style={styles.container}>
      <Text style={styles.detailLabel}>{strings.t("footer.detail")}</Text>
    </View>
  );
};

const makeStyles = () =>
  StyleSheet.create({
    container: {},
    detailLabel: {},
  });

export default Footer;
