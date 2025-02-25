import AppNavigator from '@navigator/AppNavigator';
import AuthNavigator from '@navigator/AuthNavigator';
import {GENERAL_SCREENS} from '@navigator/util/navigators.list';
import {
  NavigatorParamList,
  RootStackParamList,
} from '@navigator/util/navigators.type';
import NavigationUtils from '@navigator/util/navigatorsUtilities';
import {
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {getUserDataSelector} from '@screens/auth/signin/api/SignIn.slice';
import React, {useEffect, useRef} from 'react';
import {useSelector} from 'react-redux';

function RootNavigator(): JSX.Element {
  // STATE & CONSTANT
  const Stack = createNativeStackNavigator<RootStackParamList>();
  const navigationRef =
    useRef<NavigationContainerRef<NavigatorParamList> | null>(null);
  const userDetailFromStore = useSelector(getUserDataSelector);

  // LIFE CYCLE
  useEffect(() => {
    if (navigationRef?.current?.isReady())
      NavigationUtils.setNavigationReference(navigationRef.current);
  }, []);

  // RENDER UI
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'normal',
          },
        }}
        initialRouteName={
          userDetailFromStore
            ? GENERAL_SCREENS.APP_NAVIGATION
            : GENERAL_SCREENS.AUTH_NAVIGATION
        }>
        <Stack.Screen
          name={GENERAL_SCREENS.AUTH_NAVIGATION}
          component={AuthNavigator}
        />

        <Stack.Screen
          name={GENERAL_SCREENS.APP_NAVIGATION}
          component={AppNavigator}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigator;
