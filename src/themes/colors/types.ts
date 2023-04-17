import {Theme} from '@react-navigation/native';

export type CustomTheme = {
  colors: {
    primary: string;
    secondary: string;
    error: string;
    text: string;
    border: string;
    darkBlue: string;
  };
} & Theme;
