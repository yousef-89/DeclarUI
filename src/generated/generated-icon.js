import React from 'react';
import { View } from 'react-native';

// Line icons on a 24x24 grid, drawn as inline SVG so generated screens can show
// real pictograms without icon fonts or image assets. Each entry is a list of
// [svg element, attributes]. The prompt builder reads these keys.
const ICONS = {
  'search': [['circle', { cx: 11, cy: 11, r: 7 }], ['path', { d: 'M16.5 16.5L21 21' }]],
  'chevron-left': [['path', { d: 'M15 5l-7 7 7 7' }]],
  'chevron-right': [['path', { d: 'M9 5l7 7-7 7' }]],
  'chevron-up': [['path', { d: 'M5 15l7-7 7 7' }]],
  'chevron-down': [['path', { d: 'M5 9l7 7 7-7' }]],
  'arrow-left': [['path', { d: 'M20 12H4M10 6l-6 6 6 6' }]],
  'arrow-right': [['path', { d: 'M4 12h16M14 6l6 6-6 6' }]],
  'arrow-up': [['path', { d: 'M12 20V4M6 10l6-6 6 6' }]],
  'arrow-down': [['path', { d: 'M12 4v16M6 14l6 6 6-6' }]],
  'menu': [['path', { d: 'M4 6h16M4 12h16M4 18h16' }]],
  'more-horizontal': [['circle', { cx: 5, cy: 12, r: 1.5, fill: true }], ['circle', { cx: 12, cy: 12, r: 1.5, fill: true }], ['circle', { cx: 19, cy: 12, r: 1.5, fill: true }]],
  'more-vertical': [['circle', { cx: 12, cy: 5, r: 1.5, fill: true }], ['circle', { cx: 12, cy: 12, r: 1.5, fill: true }], ['circle', { cx: 12, cy: 19, r: 1.5, fill: true }]],
  'close': [['path', { d: 'M6 6l12 12M18 6L6 18' }]],
  'plus': [['path', { d: 'M12 5v14M5 12h14' }]],
  'minus': [['path', { d: 'M5 12h14' }]],
  'check': [['path', { d: 'M5 12.5l4.5 4.5L19 7.5' }]],
  'home': [['path', { d: 'M4 11l8-7 8 7v9h-5.5v-6h-5v6H4z' }]],
  'heart': [['path', { d: 'M12 20s-8-4.8-8-10.5A4.5 4.5 0 0 1 12 7a4.5 4.5 0 0 1 8 2.5C20 15.2 12 20 12 20z' }]],
  'star': [['path', { d: 'M12 3l2.8 5.8 6.2.8-4.6 4.3 1.2 6.1L12 17l-5.6 3 1.2-6.1L3 9.6l6.2-.8z' }]],
  'user': [['circle', { cx: 12, cy: 8, r: 4 }], ['path', { d: 'M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7' }]],
  'users': [['circle', { cx: 9, cy: 8, r: 3.5 }], ['path', { d: 'M2 20c0-3.9 3.1-6 7-6s7 2.1 7 6M16 4.5a3.5 3.5 0 0 1 0 7M18 14c2.4.6 4 2.6 4 6' }]],
  'bell': [['path', { d: 'M6 16v-5a6 6 0 0 1 12 0v5l2 2H4z' }], ['path', { d: 'M10 21h4' }]],
  'cart': [['path', { d: 'M3 4h3l2.5 11h10l2-8H7' }], ['circle', { cx: 9.5, cy: 19, r: 1.5 }], ['circle', { cx: 17, cy: 19, r: 1.5 }]],
  'bag': [['rect', { x: 5, y: 8, width: 14, height: 13, rx: 2 }], ['path', { d: 'M9 8V7a3 3 0 0 1 6 0v1' }]],
  'settings': [['circle', { cx: 12, cy: 12, r: 3 }], ['path', { d: 'M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9L7 7M17 17l2.1 2.1M4.9 19.1L7 17M17 7l2.1-2.1' }]],
  'filter': [['path', { d: 'M4 7h16M7 12h10M10 17h4' }]],
  'sliders': [['path', { d: 'M4 7h10M18 7h2M4 17h4M12 17h8' }], ['circle', { cx: 16, cy: 7, r: 2 }], ['circle', { cx: 10, cy: 17, r: 2 }]],
  'share': [['path', { d: 'M12 3v12M7 8l5-5 5 5M5 13v7h14v-7' }]],
  'download': [['path', { d: 'M12 4v12M7 11l5 5 5-5M5 20h14' }]],
  'upload': [['path', { d: 'M12 16V4M7 9l5-5 5 5M5 20h14' }]],
  'refresh': [['path', { d: 'M20 12a8 8 0 1 1-2.3-5.7M20 4v5h-5' }]],
  'play': [['path', { d: 'M8 5l11 7-11 7z', fill: true }]],
  'pause': [['rect', { x: 6.5, y: 5, width: 3.5, height: 14, fill: true }], ['rect', { x: 14, y: 5, width: 3.5, height: 14, fill: true }]],
  'skip-forward': [['path', { d: 'M5 5l10 7-10 7z', fill: true }], ['path', { d: 'M19 5v14' }]],
  'skip-back': [['path', { d: 'M19 5L9 12l10 7z', fill: true }], ['path', { d: 'M5 5v14' }]],
  'shuffle': [['path', { d: 'M4 7h3c5 0 5 10 10 10h3M4 17h3c1.5 0 2.5-.9 3.4-2M14 9c.8-1.2 1.8-2 3-2h3M17 4l3 3-3 3M17 14l3 3-3 3' }]],
  'repeat': [['path', { d: 'M4 11V9a3 3 0 0 1 3-3h13M17 3l3 3-3 3M20 13v2a3 3 0 0 1-3 3H4M7 21l-3-3 3-3' }]],
  'volume': [['path', { d: 'M4 9h4l5-4v14l-5-4H4z' }], ['path', { d: 'M16.5 8.5a5 5 0 0 1 0 7' }]],
  'mic': [['rect', { x: 9, y: 3, width: 6, height: 11, rx: 3 }], ['path', { d: 'M5 11a7 7 0 0 0 14 0M12 18v3' }]],
  'camera': [['path', { d: 'M3 8h4l2-3h6l2 3h4v12H3z' }], ['circle', { cx: 12, cy: 13.5, r: 3.5 }]],
  'image': [['rect', { x: 3, y: 4, width: 18, height: 16, rx: 2 }], ['circle', { cx: 8.5, cy: 9.5, r: 1.5 }], ['path', { d: 'M21 16l-5-5-9 9' }]],
  'calendar': [['rect', { x: 4, y: 5, width: 16, height: 16, rx: 2 }], ['path', { d: 'M4 10h16M9 3v4M15 3v4' }]],
  'clock': [['circle', { cx: 12, cy: 12, r: 9 }], ['path', { d: 'M12 7v5l3 2' }]],
  'location': [['path', { d: 'M12 21c-4-5-7-8-7-11.5a7 7 0 0 1 14 0C19 13 16 16 12 21z' }], ['circle', { cx: 12, cy: 9.5, r: 2.5 }]],
  'globe': [['circle', { cx: 12, cy: 12, r: 9 }], ['path', { d: 'M3 12h18M12 3c2.5 2.5 3.5 5.5 3.5 9s-1 6.5-3.5 9c-2.5-2.5-3.5-5.5-3.5-9s1-6.5 3.5-9z' }]],
  'chat': [['path', { d: 'M4 5h16v11H9l-4 4v-4H4z' }]],
  'mail': [['rect', { x: 3, y: 5, width: 18, height: 14, rx: 2 }], ['path', { d: 'M3 7l9 6 9-6' }]],
  'phone': [['path', { d: 'M5 3h4l2 5-2.5 1.5a11 11 0 0 0 6 6L16 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2z' }]],
  'send': [['path', { d: 'M21 3L3 10.5l7 3 3 7.5z' }], ['path', { d: 'M10 13.5L21 3' }]],
  'lock': [['rect', { x: 5, y: 11, width: 14, height: 10, rx: 2 }], ['path', { d: 'M8 11V7a4 4 0 0 1 8 0v4' }]],
  'eye': [['path', { d: 'M2 12c3-6 17-6 20 0-3 6-17 6-20 0z' }], ['circle', { cx: 12, cy: 12, r: 3 }]],
  'edit': [['path', { d: 'M4 20l1-5L16 4l4 4L9 19z' }]],
  'trash': [['path', { d: 'M4 7h16M6 7l1 14h10l1-14M9 7V4h6v3' }]],
  'grid': [['rect', { x: 4, y: 4, width: 6.5, height: 6.5, rx: 1 }], ['rect', { x: 13.5, y: 4, width: 6.5, height: 6.5, rx: 1 }], ['rect', { x: 4, y: 13.5, width: 6.5, height: 6.5, rx: 1 }], ['rect', { x: 13.5, y: 13.5, width: 6.5, height: 6.5, rx: 1 }]],
  'list': [['path', { d: 'M9 6h11M9 12h11M9 18h11' }], ['circle', { cx: 4.5, cy: 6, r: 1, fill: true }], ['circle', { cx: 4.5, cy: 12, r: 1, fill: true }], ['circle', { cx: 4.5, cy: 18, r: 1, fill: true }]],
  'bookmark': [['path', { d: 'M6 3h12v18l-6-5-6 5z' }]],
  'gift': [['rect', { x: 4, y: 10, width: 16, height: 11 }], ['rect', { x: 3, y: 7, width: 18, height: 3 }], ['path', { d: 'M12 7v14M12 7C10 3 6.5 4 8 7M12 7c2-4 5.5-3 4 0' }]],
  'credit-card': [['rect', { x: 3, y: 6, width: 18, height: 13, rx: 2 }], ['path', { d: 'M3 10h18M7 15h3' }]],
  'wallet': [['path', { d: 'M4 7h15v13H4zM4 7l12-3v3' }], ['circle', { cx: 15.5, cy: 13.5, r: 1.2, fill: true }]],
  'tag': [['path', { d: 'M3 12V3h9l9 9-9 9z' }], ['circle', { cx: 7.5, cy: 7.5, r: 1.5 }]],
  'info': [['circle', { cx: 12, cy: 12, r: 9 }], ['path', { d: 'M12 11v6M12 7.5v.5' }]],
  'help': [['circle', { cx: 12, cy: 12, r: 9 }], ['path', { d: 'M9.5 9.5a2.5 2.5 0 0 1 5 0c0 2-2.5 2-2.5 4M12 17v.5' }]],
  'logout': [['path', { d: 'M10 4H5v16h5M14 8l4 4-4 4M18 12H9' }]],
  'scan': [['path', { d: 'M4 8V4h4M16 4h4v4M20 16v4h-4M8 20H4v-4M4 12h16' }]],
  'qr-code': [['rect', { x: 4, y: 4, width: 6, height: 6 }], ['rect', { x: 14, y: 4, width: 6, height: 6 }], ['rect', { x: 4, y: 14, width: 6, height: 6 }], ['path', { d: 'M14 14h2v2h-2zM18 18h2v2h-2zM14 18h2M18 14h2' }]],
  'printer': [['path', { d: 'M7 9V4h10v5M7 17H4v-8h16v8h-3' }], ['rect', { x: 7, y: 14, width: 10, height: 7 }]],
  'car': [['path', { d: 'M3 16v-4l2-5h14l2 5v4zM3 12h18' }], ['circle', { cx: 7, cy: 16.5, r: 1.8 }], ['circle', { cx: 17, cy: 16.5, r: 1.8 }]],
  'truck': [['path', { d: 'M2 6h12v10H2zM14 10h4l3 3v3h-7' }], ['circle', { cx: 6, cy: 18, r: 1.8 }], ['circle', { cx: 17, cy: 18, r: 1.8 }]],
  'diamond': [['path', { d: 'M6 4h12l3 5-9 11L3 9z' }], ['path', { d: 'M3 9h18' }]],
  'briefcase': [['rect', { x: 3, y: 7, width: 18, height: 13, rx: 2 }], ['path', { d: 'M9 7V5h6v2M3 12h18' }]],
  'book': [['path', { d: 'M4 4h6a2 2 0 0 1 2 2v14a2 2 0 0 0-2-2H4zM20 4h-6a2 2 0 0 0-2 2v14a2 2 0 0 1 2-2h6z' }]],
  'music': [['path', { d: 'M9 18V5l11-2v13' }], ['circle', { cx: 6.5, cy: 18, r: 2.5 }], ['circle', { cx: 17.5, cy: 16, r: 2.5 }]],
  'headphones': [['path', { d: 'M4 17v-5a8 8 0 0 1 16 0v5' }], ['rect', { x: 3, y: 14, width: 4, height: 6, rx: 1.5 }], ['rect', { x: 17, y: 14, width: 4, height: 6, rx: 1.5 }]],
  'video': [['rect', { x: 3, y: 6, width: 13, height: 12, rx: 2 }], ['path', { d: 'M16 10l5-3v10l-5-3' }]],
  'wifi': [['path', { d: 'M2 9a15 15 0 0 1 20 0M5.5 12.5a10 10 0 0 1 13 0M9 16a5 5 0 0 1 6 0' }], ['circle', { cx: 12, cy: 19.5, r: 1, fill: true }]],
  'battery': [['rect', { x: 2, y: 7, width: 18, height: 10, rx: 2 }], ['path', { d: 'M22 10v4' }]],
  'signal': [['path', { d: 'M4 20v-3M9 20v-7M14 20v-11M19 20V5' }]],
  'sun': [['circle', { cx: 12, cy: 12, r: 4 }], ['path', { d: 'M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5L19 19M5 19l1.5-1.5M17.5 6.5L19 5' }]],
  'moon': [['path', { d: 'M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z' }]],
  'flag': [['path', { d: 'M5 21V4h12l-2 4 2 4H5' }]],
  'thumbs-up': [['path', { d: 'M7 11v9H4v-9zM7 11l4-7c1.5 0 2.5 1 2 3l-1 3h6a2 2 0 0 1 2 2.3l-1.2 6A2 2 0 0 1 16.8 20H7' }]],
  'comment': [['path', { d: 'M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z' }]],
  'link': [['path', { d: 'M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1' }]],
  'circle': [['circle', { cx: 12, cy: 12, r: 8 }]],
};

// Names used by earlier generated screens (Ionicons / Material / Feather style).
const ALIASES = {
  'x': 'close',
  'close-circle': 'close',
  'add': 'plus',
  'remove': 'minus',
  'checkmark': 'check',
  'person': 'user',
  'account': 'user',
  'profile': 'user',
  'people': 'users',
  'notifications': 'bell',
  'shopping-cart': 'cart',
  'cart-outline': 'cart',
  'shopping-bag': 'bag',
  'bag-suitcase': 'briefcase',
  'gear': 'settings',
  'cog': 'settings',
  'options': 'sliders',
  'tune': 'sliders',
  'keyboard-arrow-down': 'chevron-down',
  'keyboard-arrow-up': 'chevron-up',
  'keyboard-arrow-right': 'chevron-right',
  'keyboard-arrow-left': 'chevron-left',
  'back': 'arrow-left',
  'arrow-back': 'arrow-left',
  'arrow-forward': 'arrow-right',
  'ellipsis-horizontal': 'more-horizontal',
  'ellipsis-vertical': 'more-vertical',
  'dots-horizontal': 'more-horizontal',
  'dots-vertical': 'more-vertical',
  'magnify': 'search',
  'location-pin': 'location',
  'map-pin': 'location',
  'pin': 'location',
  'chatbubble': 'chat',
  'message': 'chat',
  'message-circle': 'comment',
  'email': 'mail',
  'call': 'phone',
  'pencil': 'edit',
  'create': 'edit',
  'delete': 'trash',
  'apps': 'grid',
  'favorite': 'heart',
  'like': 'thumbs-up',
  'card': 'credit-card',
  'payment': 'credit-card',
  'time': 'clock',
  'qrcode-scan': 'qr-code',
  'line-scan': 'scan',
  'center-focus-weak': 'scan',
  'diamond-stone': 'diamond',
  'photo': 'image',
  'play-circle': 'play',
  'volume-high': 'volume',
  'help-circle': 'help',
  'information': 'info',
  'log-out': 'logout',
};

export const ICON_NAMES = Object.keys(ICONS);

function resolveName(name = '') {
  const base = String(name).toLowerCase().replace(/-(outline|sharp|filled|fill)$/, '');
  if (ICONS[base]) {
    return base;
  }
  return ALIASES[base] || 'circle';
}

export default function Icon({ name, size = 20, color = '#000', strokeWidth = 2, filled = false, style }) {
  const elements = ICONS[resolveName(name)];
  const solid = filled || /-(filled|fill)$/.test(String(name));

  return (
    <View style={[{ width: size, height: size }, style]}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {elements.map(([Tag, { fill, ...attributes }], index) => (
          <Tag key={index} {...attributes} fill={fill || solid ? color : 'none'} />
        ))}
      </svg>
    </View>
  );
}
