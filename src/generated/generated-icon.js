import React from 'react';
import { Text } from 'react-native';

const glyphs = {
  'arrow-left': '<',
  'chevron-left': '<',
  'chevron-right': '>',
  'chevron-down': 'v',
  search: '?',
  camera: 'O',
  mic: 'o',
  'mic-outline': 'o',
  bell: '*',
  user: '●',
  person: '●',
  'person-outline': '○',
  home: '^',
  'home-outline': '^',
  menu: '=',
  'menu-outline': '=',
  'shopping-cart': '#',
  'cart-outline': '#',
  'keyboard-arrow-down': 'v',
  'center-focus-weak': 'O',
  'qrcode-scan': '#',
  'line-scan': '#',
  'bag-suitcase': '#',
  printer: '#',
  car: '#',
  'diamond-stone': '<>',
};

export default function Icon({ name, size = 20, color = '#000', style }) {
  return (
    <Text style={[{ fontSize: size, color, lineHeight: size }, style]}>
      {glyphs[name] || '.'}
    </Text>
  );
}
