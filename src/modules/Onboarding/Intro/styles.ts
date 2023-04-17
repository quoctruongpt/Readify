import {StyleSheet} from 'react-native';
import {getPercentHeight, spacing} from 'src/themes/spacing';

export const styles = StyleSheet.create({
  container: {flex: 1, paddingTop: spacing.w_xl},
  logo: {
    width: '100%',
    height: getPercentHeight(74),
    resizeMode: 'contain',
  },
  imageIntroWrap: {
    marginTop: spacing.h_xl,
    paddingVertical: spacing.h_xl,
    paddingHorizontal: spacing.w_xl,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageIntro: {
    width: '100%',
    height: getPercentHeight(326),
    resizeMode: 'contain',
  },
});
