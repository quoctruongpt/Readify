import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export const getPercentHeight = (height: number) => {
  return hp(0.1079913 * height);
};

export const getPercentWidth = (width: number) => {
  return wp(0.2336448 * width);
};

export const spacing = {
  w_xxs: getPercentWidth(4),
  w_xs: getPercentWidth(8),
  w_s: getPercentWidth(12),
  w_m: getPercentWidth(16),
  w_l: getPercentWidth(20),
  w_xl: getPercentWidth(24),
  w_xxl: getPercentWidth(28),
  h_xxs: getPercentHeight(4),
  h_xs: getPercentHeight(8),
  h_s: getPercentHeight(12),
  h_m: getPercentHeight(16),
  h_l: getPercentHeight(20),
  h_xl: getPercentHeight(24),
  h_xxl: getPercentHeight(28),
};
