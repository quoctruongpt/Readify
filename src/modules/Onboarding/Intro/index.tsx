import {useTheme} from '@react-navigation/native';
import React, {useEffect} from 'react';

import {View, Image, SafeAreaView, Dimensions} from 'react-native';
import {CustomTheme} from 'src/themes/colors/types';
import {styles} from './styles';
import Animated, {useAnimatedStyle, useSharedValue, withTiming} from 'react-native-reanimated';
import {getPercentHeight} from 'src/themes/spacing';
import {TextApp} from 'src/components/TextApp';
import {useTranslation} from 'react-i18next';

const Intro: React.FC = () => {
  const {colors} = useTheme() as CustomTheme;
  const logoPosition = useSharedValue(Dimensions.get('window').height / 2 - getPercentHeight(74));
  const {t} = useTranslation();

  useEffect(() => {
    logoPosition.value = 0;
  }, []);

  const logoStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: withTiming(logoPosition.value, {
            duration: 1500,
          }),
        },
      ],
    };
  });

  return (
    <SafeAreaView style={[styles.container, {backgroundColor: colors.darkBlue}]}>
      <Animated.Image
        style={[styles.logo, logoStyles]}
        source={require('src/assets/images/logo/logo.png')}
      />
      <View style={styles.imageIntroWrap}>
        <Image style={styles.imageIntro} source={require('src/assets/images/intro1/Group.png')} />
      </View>
      <View>{/* <TextApp>{t('intro.evryWhere')}</TextApp> */}</View>
    </SafeAreaView>
  );
};

export {Intro};
