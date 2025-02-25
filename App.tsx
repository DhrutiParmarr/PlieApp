import RootNavigator from '@navigator/RootNavigator';
import {persistor, store} from '@root/app/store';
import React from 'react';
import {ToastProvider} from 'react-native-toast-notifications';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

function App(): React.JSX.Element {
  return (
    <ToastProvider>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <RootNavigator />
        </PersistGate>
      </Provider>
    </ToastProvider>
  );
}

export default App;
