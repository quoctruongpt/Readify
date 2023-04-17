import {DarkTheme, DefaultTheme} from '@react-navigation/native';
import {lightColors} from './light';
import {darkColors} from './dark';

export const theme = {
  light: {
    ...DefaultTheme,
    colors: lightColors,
  },
  dark: {
    ...DarkTheme,
    colors: darkColors,
  },
};
