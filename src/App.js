import React, { Suspense, lazy } from 'react';
import { View, StyleSheet, Text } from 'react-native';

const getQueryParam = (param) => {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param) || 'DefaultViewScreen';
};

const targetComponent = getQueryParam('component');

const ComponentToRender = lazy(() => 
  import(`./generated/${targetComponent}`).catch((err) => {
    console.error('Render Error:', err);
    return {
      default: () => (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>Failed to load component: {targetComponent}</Text>
        </View>
      )
    };
  })
);

export default function App() {
  return (
    // Wrap with standard HTML divs so the IDs survive the build
    <div id="render-root">
      <View style={styles.mobileContainer}>
        <Suspense fallback={
          <div id="render-loading">
            <View style={styles.loadingContainer} />
          </div>
        }>
          <ComponentToRender />
        </Suspense>
      </View>
    </div>
  );
}


const styles = {
  outerShell: {
    width: '390px',
    height: '844px',
    backgroundColor: '#FFFFFF',
    overflow: 'hidden',
    position: 'relative',
    boxSizing: 'border-box',
  },
  loadingShell: {
    width: '100%',
    height: '100%',
    backgroundColor: '#FFFFFF',
  },
};