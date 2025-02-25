import {
  GENERAL_SCREENS,
  PRIVATE_SCREENS,
  PUBLIC_SCREENS,
} from '@navigator/util/navigators.list';
import React from 'react';

export type RootStackParamList = {
  [GENERAL_SCREENS.AUTH_NAVIGATION]: undefined;
  [GENERAL_SCREENS.APP_NAVIGATION]: undefined;
};

export type AuthStackParamList = {
  [PUBLIC_SCREENS.SIGN_IN]: undefined;
};

export type AppStackParamList = {
  [PRIVATE_SCREENS.SEARCH]: undefined;
  [PRIVATE_SCREENS.EVENT]: undefined;
  [PRIVATE_SCREENS.FAVORITES]: undefined;
  [PRIVATE_SCREENS.PROFILE]: undefined;
};

export interface IBottomTabScreenConfig {
  name: string;
  component: React.FC<{}>;
  icon: (focused: boolean) => JSX.Element;
}

export type NavigatorParamList = RootStackParamList &
  AuthStackParamList &
  AppStackParamList;
