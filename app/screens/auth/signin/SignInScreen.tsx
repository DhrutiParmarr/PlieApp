import Button from '@components/Button';
import Divider from '@components/Divider';
import Icon from '@components/Icon';
import ScreenWrapper from '@components/ScreenWrapper';
import SocialLogin from '@components/SocialLogin';
import TextField from '@components/TextFiled';
import {GENERAL_SCREENS} from '@navigator/util/navigators.list';
import NavigationUtils from '@navigator/util/navigatorsUtilities';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import AppImageList from '@root/app/assets/images';
import {APIResponse} from '@root/app/core/axiosInstance.creater';
import {appConfig} from '@root/app/core/config';
import {asyncUserSignIn} from '@screens/auth/signin/api/SignIn.service';
import {signInActions} from '@screens/auth/signin/api/SignIn.slice';
import {styles} from '@screens/auth/signin/ui/SignInScreen.style';
import {colors} from '@theme/colors';
import {SCREEN_WIDTH} from '@utils/globalConstant';
import {Formik} from 'formik';
import React, {useEffect, useState} from 'react';
import {ImageBackground, ScrollView, Text, View} from 'react-native';
import {useToast} from 'react-native-toast-notifications';
import {useDispatch} from 'react-redux';
// HELPER  FUNCTION
const validateForm = (values: {email: string; password: string}) => {
  const errors: {email?: string; password?: string} = {};

  if (!values.email) {
    errors.email = 'Email is required111';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.password) {
    errors.password = 'Password is required';
  } else if (values.password.length < 6) {
    errors.password = 'Password too short';
  }

  return errors;
};

const SignInScreen = () => {
  // STATE & CONSTANT
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const dispatch = useDispatch();
  const toast = useToast();

  // LIFE CYCLE
  useEffect(() => {
    GoogleSignin.configure({
      webClientId: appConfig.GOOGLE_WEB_CLIENT_ID,
    });
  }, []);

  // HANDLE METHOD
  const handleSubmit = async (values: {email: string; password: string}) => {
    const formdata = new FormData();
    formdata.append('email', values?.email.trim());
    formdata.append('password', values?.password.trim());

    await dispatch(asyncUserSignIn(formdata) as any)
      .unwrap()
      .then(() => {
        NavigationUtils.replace(GENERAL_SCREENS.APP_NAVIGATION);
      })
      .catch((error: APIResponse) => {
        toast.show(error.message);
      });
  };

  const handleOnGuestSignin = () => {
    dispatch(
      signInActions.userDetail({
        name: 'Guest',
      }),
    );
    NavigationUtils.replace(GENERAL_SCREENS.APP_NAVIGATION);
  };

  const handleOnFeatureUnavailable = () => {
    toast.show('Feature not available', {type: 'warning'});
  };

  // RENDER UI
  return (
    <ScreenWrapper>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <View style={styles.logoContainer}>
          <ImageBackground
            source={AppImageList.imagePlaceHolder}
            style={styles.logo}>
            <Text style={styles.logoText}>Pliē</Text>
          </ImageBackground>
        </View>

        <View style={[styles.signInContainer, styles.signInContentContainer]}>
          <View>
            <Formik
              initialValues={{
                email: 'testpracticaluser001@mailinator.com',
                password: 'Test@123',
              }}
              validate={validateForm}
              onSubmit={handleSubmit}>
              {({
                handleChange,
                handleBlur,
                handleSubmit,
                values,
                errors,
                touched,
              }) => (
                <View style={styles.form}>
                  <TextField
                    value={values.email}
                    label="Email"
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    autoCapitalize="none"
                    autoComplete="email"
                    keyboardType="email-address"
                    placeholder="email@email.com"
                    error={touched.email && errors.email ? errors.email : ''}
                  />
                  <TextField
                    label="Password"
                    value={values.password}
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    autoCapitalize="none"
                    autoComplete="password"
                    secureTextEntry={!isPasswordVisible}
                    placeholder="Password"
                    rightAccessory={() => (
                      <Icon
                        type="Ionicons"
                        name={
                          isPasswordVisible ? 'eye-outline' : 'eye-off-outline'
                        }
                        size={16}
                        color={colors.secondary}
                        onPress={() =>
                          setIsPasswordVisible(prevValue => !prevValue)
                        }
                      />
                    )}
                    error={
                      touched.password && errors.password ? errors.password : ''
                    }
                  />
                  <Button
                    onPress={handleOnFeatureUnavailable}
                    text="Forgot Password?"
                    loading={false}
                    textStyle={styles.forgotPasswordText}
                    style={styles.forgotPasswordContainer}
                  />

                  <View style={styles.signInButtonViewContainer}>
                    <Button
                      onPress={handleSubmit}
                      text="Sign In"
                      loading={false}
                      textStyle={styles.signInText}
                      style={{height: 35, width: 98}}
                    />

                    <Text style={styles.signUpText}>
                      {`${'Not a member?\r'}`}
                      <Text
                        onPress={handleOnFeatureUnavailable}
                        style={[
                          styles.signUpText,
                          {textDecorationLine: 'underline'},
                        ]}>
                        Sign Up Here
                      </Text>
                    </Text>
                  </View>
                </View>
              )}
            </Formik>
          </View>

          <View style={styles.orContainer}>
            <Divider width={SCREEN_WIDTH * 0.3} />
            <Text style={styles.socialSignUpHeader}>Or Sign in with:</Text>
            <Divider width={SCREEN_WIDTH * 0.3} />
          </View>
          <SocialLogin isGoogleLogin={true} />
          <Button
            onPress={handleOnGuestSignin}
            text="Enter as Guest"
            loading={false}
            textStyle={styles.socialSignUpHeader}
            style={styles.guestText}
          />
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
};

export default SignInScreen;
