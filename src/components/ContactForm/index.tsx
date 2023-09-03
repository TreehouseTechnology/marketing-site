import React, { useCallback } from "react";
import {
  Button,
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  View,
  ViewStyle,
} from "react-native";
import { capitalize } from "lodash";
import { useForm, Controller } from "react-hook-form";
import strings from "@/constants/strings";
import { useStyles, UseStylesHookOptions } from "@/hooks/useStyles";

export type ContactFormFields = {
  name: string;
  email: string;
  message: string;
};

export interface ContactFormProps extends Partial<ContactFormFields> {
  title?: string;
  detail?: string;
  style?: StyleProp<ViewStyle>;
  inputContainerStyle?: StyleProp<ViewStyle>;
  onSubmit?: (data: ContactFormFields) => void;
}

export const ContactForm: React.FC<ContactFormProps> = ({
  title = null,
  detail = null,
  name = "",
  email = "",
  message = "",
  style = null,
  inputContainerStyle = null,
  onSubmit = () => {},
}) => {
  const styles = useStyles(makeStyles);

  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<ContactFormFields>({
    defaultValues: {
      name,
      email,
      message,
    },
  });

  const submitCallback = useCallback(
    (data: ContactFormFields) => {
      onSubmit(data);
      reset();
    },
    [onSubmit, reset]
  );

  return (
    <View style={[styles.container, style]}>
      {(title || detail) && (
        <View style={styles.textContainer}>
          {title && <Text style={styles.titleLabel}>{title}</Text>}
          {detail && <Text style={styles.bodyLabel}>{detail}</Text>}
        </View>
      )}
      <View style={styles.formContainer}>
        <View style={[styles.inputContainer, inputContainerStyle]}>
          <Controller
            name="name"
            control={control}
            rules={{
              maxLength: 64,
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={[styles.nameField, styles.input]}
                placeholder={capitalize(
                  strings.t("contactForm.namePlaceholder")
                )}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
          />
          {errors.name && (
            <Text>
              {capitalize(
                strings.t("contactForm.fieldIsRequired", {
                  field: strings.t("contactForm.namePlaceholder"),
                })
              )}
            </Text>
          )}

          <Controller
            name="email"
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={[styles.emailField, styles.input]}
                placeholder={capitalize(
                  strings.t("contactForm.emailPlaceholder")
                )}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
          />
          {errors.email && (
            <Text>
              {capitalize(
                strings.t("contactForm.fieldIsRequired", {
                  field: strings.t("contactForm.emailPlaceholder"),
                })
              )}
            </Text>
          )}

          <Controller
            name="message"
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                multiline
                style={[styles.messageField, styles.input]}
                placeholder={capitalize(
                  strings.t("contactForm.messagePlaceholder")
                )}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
          />
          {errors.message && (
            <Text>
              {capitalize(
                strings.t("contactForm.fieldIsRequired", {
                  field: strings.t("contactForm.messagePlaceholder"),
                })
              )}
            </Text>
          )}
        </View>

        <Button
          color={styles.submitButton.backgroundColor}
          title={strings.translate("contactForm.submitTitle")}
          onPress={handleSubmit(submitCallback)}
        />
      </View>
    </View>
  );
};

const makeStyles: UseStylesHookOptions = (colors) =>
  StyleSheet.create({
    container: {
      rowGap: 28,
    },
    textContainer: {},
    titleLabel: {
      color: colors.text,
      fontWeight: "bold",
      fontSize: 36,
    },
    bodyLabel: {
      color: colors.text,
    },
    formContainer: {},
    inputContainer: {
      paddingHorizontal: 20,
      paddingBottom: 20,
    },
    input: {},
    nameField: {
      color: colors.text,
    },
    emailField: {
      color: colors.text,
    },
    messageField: {
      color: colors.text,
    },
    submitButton: {
      backgroundColor: colors.primary,
    },
  });

export default ContactForm;
