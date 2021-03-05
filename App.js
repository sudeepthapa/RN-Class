import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import AppNavigator from './navigation';
import { Provider} from 'react-redux'
import store from './store';


export default function App() {
  return (
    <Provider store={store}>
      <PaperProvider>
        <AppNavigator />
      </PaperProvider>
    </Provider>
  );
}
