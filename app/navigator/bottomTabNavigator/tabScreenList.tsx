import Icon from '@components/Icon';
import {PRIVATE_SCREENS} from '@navigator/util/navigators.list';
import {IBottomTabScreenConfig} from '@navigator/util/navigators.type';
import {BottomTabNavigationOptions} from '@react-navigation/bottom-tabs';
import EventListScreen from '@screens/app/event/ui/EventListScreen';
import FavoriteScreen from '@screens/app/favorite/ui/FavoriteScreen';

import ComingSoonScreen from '@screens/ComingSoonScreen';
import {colors} from '@theme/colors';
import React from 'react';

export const BOTTOM_TAB_SCREEN_LIST: IBottomTabScreenConfig[] = [
  {
    name: PRIVATE_SCREENS.SEARCH,
    component: ComingSoonScreen,
    icon: (focused: boolean) => (
      <Icon
        type="AntDesign"
        name="search1"
        color={focused ? colors.primary : colors.secondary}
      />
    ),
  },
  {
    name: PRIVATE_SCREENS.EVENT,
    component: EventListScreen,
    icon: (focused: boolean) => (
      <Icon
        type="SimpleLineIcons"
        name="calendar"
        color={focused ? colors.primary : colors.secondary}
      />
    ),
  },
  {
    name: PRIVATE_SCREENS.FAVORITES,
    component: FavoriteScreen,
    icon: (focused: boolean) => (
      <Icon
        type="FontAwesome"
        name="heart-o"
        color={focused ? colors.primary : colors.secondary}
      />
    ),
  },
  {
    name: PRIVATE_SCREENS.PROFILE,
    component: ComingSoonScreen,
    icon: (focused: boolean) => (
      <Icon
        type="Feather"
        name="user"
        color={focused ? colors.primary : colors.secondary}
      />
    ),
  },
];

export const BOTTOM_TAB_SCREEN_OPTIONS: BottomTabNavigationOptions = {
  headerShown: true,
  headerStyle: {
    elevation: 30,
  },
  tabBarActiveTintColor: colors.primary,
  tabBarInactiveTintColor: colors.palette.black,
};
