import Icon from '@components/Icon';
import {
  BOTTOM_TAB_SCREEN_LIST,
  BOTTOM_TAB_SCREEN_OPTIONS,
} from '@navigator/bottomTabNavigator/tabScreenList';
import {
  GENERAL_SCREENS,
  PRIVATE_SCREENS,
} from '@navigator/util/navigators.list';
import NavigationUtils from '@navigator/util/navigatorsUtilities';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {DESTROY_SESSION} from '@root/app/store/store.type';
import {
  getUserDataSelector,
  signInActions,
} from '@screens/auth/signin/api/SignIn.slice';
import {colors} from '@theme/colors';
import {typography} from '@theme/typography';
import {SCREEN_HEIGHT} from '@utils/globalConstant';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

type IBottomHeaderProps = {
  loginUserName: string;
};

const BottomTabHeader: React.FC<IBottomHeaderProps> = ({loginUserName}) => {
  return (
    <View style={styles.headerContainer}>
      <View>
        <Text style={styles.headerText}>
          {`Hello ${loginUserName ? loginUserName : 'Renzo'} !`}
        </Text>
        <Text style={styles.subTitle}>Are you ready to dance?</Text>
      </View>
      <View style={{paddingTop: SCREEN_HEIGHT * 0.01}}>
        <LogOut />
      </View>
    </View>
  );
};

const LogOut: React.FC = () => {
  const dispatch = useDispatch();

  const handleOnLogOut = () => {
    GoogleSignin.signOut();
    AsyncStorage.clear();
    dispatch(signInActions.userDetail(''));
    dispatch({type: DESTROY_SESSION});
    NavigationUtils.replace(GENERAL_SCREENS.AUTH_NAVIGATION);
  };

  return (
    <Icon name={'logout'} type={'SimpleLineIcons'} onPress={handleOnLogOut} />
  );
};

function AppNavigator(): JSX.Element {
  // STATE & CONSTANT
  const BottomTab = createBottomTabNavigator();
  const userDetailFromStore = useSelector(getUserDataSelector);
  const isCustomHeaderVisible = [
    PRIVATE_SCREENS.EVENT as string,
    PRIVATE_SCREENS.FAVORITES as string,
  ];

  // RENDER UI
  return (
    <BottomTab.Navigator screenOptions={BOTTOM_TAB_SCREEN_OPTIONS}>
      {/* List out all BottomTab screen */}
      {BOTTOM_TAB_SCREEN_LIST.map(screen => (
        <BottomTab.Screen
          key={screen.name}
          name={screen.name}
          component={screen.component}
          options={{
            tabBarIcon: ({focused}) => screen.icon?.(focused),
            header: isCustomHeaderVisible.includes(screen.name)
              ? () => (
                  <BottomTabHeader
                    loginUserName={
                      userDetailFromStore?.name ||
                      userDetailFromStore?.usr_fname
                    }
                  />
                )
              : undefined,
            headerTitleAlign: isCustomHeaderVisible.includes(screen.name)
              ? undefined
              : 'center',
            headerTitle: isCustomHeaderVisible.includes(screen.name)
              ? screen.name
              : undefined,
            headerRight: () => (
              <View style={styles.logOutView}>
                <LogOut />
              </View>
            ),
          }}
        />
      ))}
    </BottomTab.Navigator>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    height: SCREEN_HEIGHT * 0.1,
    paddingLeft: 35,
    paddingTop: 15,
    paddingBottom: 20,
    paddingRight: 10,
    elevation: 2,
    backgroundColor: colors.defaultBackGround,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerText: {
    fontFamily: typography.secondary.semiBold,
    fontWeight: '600',
    fontSize: 26,
    lineHeight: 35,
    color: colors.text,
  },
  subTitle: {
    fontFamily: typography.secondary.regular,
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 24,
    color: colors.textDim,
  },
  logOutView: {
    paddingTop: SCREEN_HEIGHT * 0.01,
    paddingRight: 10,
  },
});

export default AppNavigator;
