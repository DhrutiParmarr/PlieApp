import {colors} from '@theme/colors';
import {typography} from '@theme/typography';
import RenderIf from '@utils/conditional/RenderIf';
import React from 'react';
import {
  ActivityIndicator,
  GestureResponderEvent,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';

interface ButtonProps {
  text: string;
  onPress: (event: GestureResponderEvent | any) => void;
  disabled?: boolean;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  backgroundColor?: string;
}

const Button: React.FC<ButtonProps> = ({
  text,
  onPress,
  disabled = false,
  loading = false,
  leftIcon,
  rightIcon,
  style,
  textStyle,
}) => {
  const $buttonContainer = [
    styles.button,
    disabled && styles.disabledButton,
    style,
  ];
  const $buttonTextContainer = [styles.text, textStyle];

  return (
    <TouchableOpacity
      style={$buttonContainer}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.7}>
      <RenderIf isTrue={!!leftIcon}>
        <View style={styles.icon}>{leftIcon}</View>
      </RenderIf>

      {loading ? (
        <ActivityIndicator color={colors.defaultBackGround} />
      ) : (
        <Text style={$buttonTextContainer}>{text}</Text>
      )}

      <RenderIf isTrue={!!rightIcon}>
        <View style={styles.icon}>{rightIcon}</View>
      </RenderIf>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.primary,
    paddingVertical: 8,
    paddingHorizontal: 24,
    borderRadius: 4,
  },
  text: {
    color: colors.defaultBackGround,
    fontFamily: typography.primary.regular,
    lineHeight: 19,
    fontSize: 16,
    fontWeight: '500',
  },
  disabledButton: {
    backgroundColor: colors.secondary,
  },
  icon: {
    paddingHorizontal: 8,
    backgroundColor: 'red',
  },
});

export default Button;
