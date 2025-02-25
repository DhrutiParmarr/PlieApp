import CImage from '@components/CImage';
import ScreenWrapper from '@components/ScreenWrapper';
import AppImageList from '@root/app/assets/images';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '@utils/globalConstant';
import React from 'react';
import {StyleSheet} from 'react-native';

const ComingSoonScreen: React.FC = ({}): JSX.Element => {
  return (
    <ScreenWrapper style={{alignItems: 'center'}}>
      <CImage
        source={AppImageList.comingSoonImage}
        style={styles.image}
        resizeMode="contain"
      />
    </ScreenWrapper>
  );
};

export default ComingSoonScreen;

const styles = StyleSheet.create({
  image: {
    height: SCREEN_HEIGHT * 0.5,
    width: SCREEN_WIDTH * 0.9,
  },
});
