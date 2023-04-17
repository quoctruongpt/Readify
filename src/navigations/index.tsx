import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AppNavigator} from './AppNavigator';
import {theme} from 'src/themes/colors';
import {CustomTheme} from 'src/themes/colors/types';

const RootNavigator: React.FC = () => {
  return (
    <NavigationContainer theme={theme.light as CustomTheme}>
      <AppNavigator />
    </NavigationContainer>
  );
};

export {RootNavigator};
