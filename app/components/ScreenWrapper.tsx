import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import {colors} from '../theme';

type ScreenWrapperProps = {
  children: React.ReactNode;
  style?: ViewStyle;
};

const ScreenWrapper: React.FC<ScreenWrapperProps> = ({
  children,
  style,
}): JSX.Element => {
  const $viewStyle = [styles.container, style];

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar
        animated={true}
        backgroundColor={colors.primary}
        barStyle="light-content"
      />
      <View style={$viewStyle}>{children}</View>
    </SafeAreaView>
  );
};

export default ScreenWrapper;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.defaultBackGround,
    justifyContent: 'center',
  },
});
