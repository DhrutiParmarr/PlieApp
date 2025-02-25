export enum GENERAL_SCREENS {
  APP_NAVIGATION = 'AppNavigator',
  AUTH_NAVIGATION = 'AuthNavigator',
}

// Without Authentication Screens
export enum PUBLIC_SCREENS {
  SIGN_IN = 'SignInScreen',
}

// With Authentication Screens
export enum PRIVATE_SCREENS {
  SEARCH = 'Search',
  EVENT = 'Event',
  FAVORITES = 'Favorites',
  PROFILE = 'Profile',
}
