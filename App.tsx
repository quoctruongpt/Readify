import React from 'react';
import {Provider} from 'react-redux';

import {store} from './src/store';
import {RootNavigator} from 'src/navigations';
import 'src/assets/localization';

function App(): JSX.Element {
  return (
    // <Provider store={store}>
    <RootNavigator />
    // </Provider>
  );
}

export default App;
