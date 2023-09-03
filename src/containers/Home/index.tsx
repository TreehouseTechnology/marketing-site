import React, { useMemo } from "react";
import { StyleSheet, StyleProp, View, ViewStyle } from "react-native";
import { useTheme } from "@react-navigation/native";
import strings from "@/constants/strings";
import { ContactForm } from "@/containers/ContactForm";

export interface HomeProps {
  style?: StyleProp<ViewStyle>;
}

export const Home: React.FC<HomeProps> = ({ style }) => {
  const { colors } = useTheme();
  const styles = useMemo(() => {
    return makeStyles(colors);
  }, [colors]);

  return (
    <View style={[styles.container, style]}>
      <View style={styles.contentContainer}>
        <ContactForm
          title={strings.t("home.title")}
          detail={strings.t("home.body")}
          style={styles.contactForm}
          inputContainerStyle={styles.contactFormInputContainer}
        />
      </View>
    </View>
  );
};

const makeStyles = (colors: Record<string, string>) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    contentContainer: {
      width: "55%",
      backgroundColor: colors.card,
      padding: 28,
      rowGap: 28,
    },
    textContainer: {},
    contactFormContainer: {},
    contactForm: {},
    contactFormInputContainer: {
      rowGap: 20,
    },
  });

export default Home;
