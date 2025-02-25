import CImage from '@components/CImage';
import {GENERAL_SCREENS} from '@navigator/util/navigators.list';
import NavigationUtils from '@navigator/util/navigatorsUtilities';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import AppImageList from '@root/app/assets/images';
import {signInActions} from '@screens/auth/signin/api/SignIn.slice';
import {colors} from '@theme/colors';
import RenderIf from '@utils/conditional/RenderIf';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useToast} from 'react-native-toast-notifications';
import {useDispatch} from 'react-redux';

interface SocialLoginProps {
  isGoogleLogin?: boolean;
  isFacebookLogin?: boolean;
  isAppleLogin?: boolean;
}

const SocialLogin: React.FC<SocialLoginProps> = ({
  isGoogleLogin = true,
  isFacebookLogin = true,
  isAppleLogin = true,
}) => {
  // STATE & CONSTANTS
  const toast = useToast();
  const dispatch = useDispatch();

  // HANDLER METHOD
  const handleOnGoogleLogin = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo: any = await GoogleSignin.signIn();
      if (userInfo.type === 'success') {
        await dispatch(signInActions.userDetail({name: userInfo?.data.user}));
        toast.show('Successfully signin', {type: 'success'});
        NavigationUtils.replace(GENERAL_SCREENS.APP_NAVIGATION);
      }
      if (userInfo.type === 'cancelled') {
        toast.show('You cancel signin with Google');
      }
    } catch (error: any) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        toast.show('Signin cancel by user', {
          type: 'danger',
        });
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.error(error);
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        toast.show('Google play service not available', {
          type: 'danger',
        });
      } else {
        toast.show('Something went wrong try again later!', {type: 'danger'});
      }
    }
  };

  const handleOnFeatureUnavailable = () => {
    toast.show('Feature not available', {type: 'warning'});
  };

  // RENDER UI
  return (
    <View style={styles.socialButtonsContainer}>
      <RenderIf isTrue={isGoogleLogin}>
        <CImage
          source={AppImageList.googleLogo}
          style={styles.socialButton}
          onPress={handleOnGoogleLogin}
        />
      </RenderIf>
      <RenderIf isTrue={isAppleLogin}>
        <CImage
          source={AppImageList.appleLogo}
          style={styles.socialButton}
          onPress={handleOnFeatureUnavailable}
        />
      </RenderIf>
      <RenderIf isTrue={isFacebookLogin}>
        <CImage
          source={AppImageList.faceBookLogo}
          style={styles.socialButton}
          onPress={handleOnFeatureUnavailable}
        />
      </RenderIf>
    </View>
  );
};

export default SocialLogin;

const styles = StyleSheet.create({
  socialButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 12,
    alignItems: 'center',
  },
  socialButton: {
    width: 48,
    height: 48,
    elevation: 5,
    borderWidth: 0,
    borderColor: colors.defaultBackGround,
    alignItems: 'center',
  },
});
