import React from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';
import {colors} from '../theme';

interface DividerProps {
  width?: ViewStyle['width'];
}

const Divider: React.FC<DividerProps> = ({width = '100%'}) => {
  return <View style={[styles.divider, {width}]} />;
};

const styles = StyleSheet.create({
  divider: {
    height: 1,
    backgroundColor: colors.palette.grayLightV3,
  },
});

export default Divider;
