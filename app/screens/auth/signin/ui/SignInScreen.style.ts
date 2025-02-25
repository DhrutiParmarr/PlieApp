import {colors} from '@theme/colors';
import {typography} from '@theme/typography';
import {SCREEN_HEIGHT} from '@utils/globalConstant';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  logoContainer: {
    width: '100%',
    height: 363,
  },
  logo: {
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
  logoText: {
    textAlign: 'center',
    fontFamily: typography.fonts.Comfortaa.regular,
    letterSpacing: 3,
    top: SCREEN_HEIGHT * 0.05,
    fontSize: SCREEN_HEIGHT * 0.07,
  },
  signInContainer: {width: '100%'},
  signInContentContainer: {
    paddingTop: 38,
    paddingHorizontal: 35,
    justifyContent: 'space-between',
  },
  form: {
    gap: 5,
  },
  forgotPasswordContainer: {
    alignSelf: 'flex-end',
    paddingRight: 0,
    paddingVertical: 0,
    backgroundColor: colors.defaultBackGround,
  },
  forgotPasswordText: {
    fontFamily: typography.primary.regular,
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 16,
    textAlign: 'right',
    color: colors.secondary,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
  },
  signInButtonViewContainer: {
    paddingTop: SCREEN_HEIGHT * 0.01,
    gap: 15,
    alignItems: 'flex-end',
  },
  signInText: {
    fontFamily: typography.primary.regular,
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 19,
    textAlign: 'right',
    color: colors.defaultBackGround,
  },
  signInButtonContainer: {
    backgroundColor: colors.primary,
    paddingHorizontal: 24,
    paddingVertical: 8,
    alignSelf: 'flex-end',
  },
  signInButtonInnerContainer: {
    flexDirection: 'row',
    gap: 5,
  },
  signUpText: {
    fontFamily: typography.primary.regular,
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 14,
    textAlign: 'center',
    color: colors.text,
  },
  orContainer: {
    flexDirection: 'row',
    marginTop: SCREEN_HEIGHT * 0.06,
    marginBottom: 39,
    alignItems: 'center',
    gap: 5,
  },
  socialSignUpHeader: {
    fontFamily: typography.primary.regular,
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 14,
    textAlign: 'center',
    color: colors.secondary,
  },
  guestText: {
    backgroundColor: colors.defaultBackGround,
    alignSelf: 'flex-end',
    marginTop: SCREEN_HEIGHT * 0.01,
    paddingRight: 0,
  },
});
