import React, { Suspense, lazy } from 'react';
import { View, StyleSheet, Text } from 'react-native';

const getQueryParam = (param) => {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param) || 'DefaultViewScreen';
};

const targetComponent = getQueryParam('component');

const ComponentToRender = lazy(() => 
  import(`./generated/${targetComponent}.js`).catch(() => ({
    default: () => (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Failed to load component: {targetComponent}</Text>
      </View>
    )
  }))
);

export default function App() {
  return (
    <View style={styles.mobileContainer} id="render-root">
      <Suspense fallback={<View style={styles.loadingContainer} id="render-loading" />}>
        <ComponentToRender />
      </Suspense>
    </View>
  );
}

const styles = StyleSheet.create({
  mobileContainer: {
    width: 390,
    height: 844,
    backgroundColor: '#FFFFFF',
    overflow: 'hidden',
    position: 'relative',
  },
  loadingContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  errorText: {
    color: '#D32F2F',
    fontSize: 14,
    textAlign: 'center',
  },
});