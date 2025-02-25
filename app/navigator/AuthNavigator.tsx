import {PUBLIC_SCREENS} from '@navigator/util/navigators.list';
import {AuthStackParamList} from '@navigator/util/navigators.type';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignInScreen from '@screens/auth/signin/SignInScreen';

const Stack = createNativeStackNavigator<AuthStackParamList>();

function AuthNavigator(): JSX.Element {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {/* List out all authentication screen */}
      <Stack.Screen name={PUBLIC_SCREENS.SIGN_IN} component={SignInScreen} />
    </Stack.Navigator>
  );
}
export default AuthNavigator;
