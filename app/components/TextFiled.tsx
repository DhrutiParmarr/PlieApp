import {colors} from '@theme/colors';
import {typography} from '@theme/typography';
import RenderIf from '@utils/conditional/RenderIf';
import React from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';

interface TextFieldProps extends TextInputProps {
  //extend from original TextFiled component
  label?: string;
  labelStyle?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  rightAccessory?: (() => React.ReactNode) | React.ReactNode;
  error?: string;
  errorStyle?: StyleProp<TextStyle>;
}

const TextField: React.FC<TextFieldProps> = ({
  label,
  labelStyle,
  containerStyle,
  rightAccessory,
  error,
  style,
  errorStyle,
  ...props
}) => {
  const $labelStyle: StyleProp<TextStyle> = [styles.label, labelStyle];
  const $textInputStyle: StyleProp<TextStyle> = [styles.input, style];
  const $errorTextStyle: StyleProp<TextStyle> = [styles.errorText, errorStyle];

  return (
    <View style={[styles.container, containerStyle]}>
      <RenderIf isTrue={!!label}>
        <Text style={$labelStyle}>{label}</Text>
      </RenderIf>

      <View style={styles.inputWrapper}>
        <TextInput style={$textInputStyle} {...props} />
        {!!rightAccessory && (
          <View style={styles.rightAccessory}>
            {typeof rightAccessory === 'function'
              ? rightAccessory()
              : rightAccessory}
          </View>
        )}
      </View>
      <RenderIf isTrue={!!error}>
        <Text style={$errorTextStyle}>{error}</Text>
      </RenderIf>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    gap: 4,
  },
  label: {
    fontFamily: typography.primary.regular,
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 24,
    color: colors.palette.grayDark,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.defaultBackGround,
    borderRadius: 4,
    backgroundColor: colors.defaultBackGround,
    shadowColor: colors.text,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  input: {
    flex: 1,
    fontSize: 14,
    fontWeight: 400,
    fontFamily: typography.primary.regular,
    lineHeight: 20,
    paddingHorizontal: 12,
    color: colors.text,
  },
  rightAccessory: {
    paddingRight: 10,
  },
  errorText: {
    color: colors.error,
    fontSize: 14,
    marginTop: 4,
    fontFamily: typography.primary.regular,
  },
});

export default TextField;
