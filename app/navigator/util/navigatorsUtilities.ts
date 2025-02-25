import {NavigatorParamList} from '@navigator/util/navigators.type';
import {NavigationContainerRef, StackActions} from '@react-navigation/native';

class NavigationUtils {
  private static navigationRef: NavigationContainerRef<NavigatorParamList> | null =
    null;

  static setNavigationReference(
    ref: NavigationContainerRef<NavigatorParamList>,
  ) {
    NavigationUtils.navigationRef = ref;
  }

  static navigate(
    routeName: keyof NavigatorParamList | string,
    params?: NavigatorParamList[keyof NavigatorParamList] | any,
  ) {
    if (NavigationUtils.navigationRef) {
      NavigationUtils.navigationRef.navigate(routeName, params);
    }
  }

  static replace(
    routeName: keyof NavigatorParamList,
    params?: NavigatorParamList[keyof NavigatorParamList],
  ) {
    if (NavigationUtils.navigationRef) {
      NavigationUtils.navigationRef.dispatch(
        StackActions.replace(routeName, params),
      );
    }
  }
}

export default NavigationUtils;
