import React from "react";
import { Text, View } from "react-native";
import { capitalize } from "lodash";
import strings from "@/constants/strings";

export interface NotFoundProps {}

export const NotFound: React.FC<NotFoundProps> = () => {
  return (
    <View>
      <Text>{capitalize(strings.t("notFound.title"))}</Text>
      <Text>{capitalize(strings.t("notFound.detail"))}</Text>
    </View>
  );
};

export default NotFound;
