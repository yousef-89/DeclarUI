import React from 'react';
import { View, Text } from 'react-native-web';

export default function TestScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#e0f7fa', height: '100%' }}>
      <Text style={{ fontSize: 22, fontWeight: 'bold', color: '#006064' }}>Renderer Active!</Text>
    </View>
  );
}