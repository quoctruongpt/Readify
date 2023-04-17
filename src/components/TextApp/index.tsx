import React from 'react';
import {StyleProp, Text, TextProps, TextStyle} from 'react-native';
import {styles} from './styles';

type TextAppProps = {
  children: React.ReactNode;
  weight?: 'w300' | 'w400' | 'w500' | 'w600' | 'w700';
  color?: string;
  style?: StyleProp<TextStyle>;
};

export const TextApp: React.FC<TextAppProps & TextProps> = ({
  children,
  weight = 'w500',
  color = '#8C8C8C',
  style,
  ...props
}) => {
  const fontWeight = () => {
    switch (weight) {
      case 'w300':
        return styles.w300;
      case 'w400':
        return styles.w400;
      case 'w500':
        return styles.w500;
      case 'w600':
        return styles.w600;
      case 'w700':
        return styles.w700;
      default:
        return styles.w500;
    }
  };

  return (
    <Text style={[fontWeight(), {color: color}, style]} {...props}>
      {children}
    </Text>
  );
};
