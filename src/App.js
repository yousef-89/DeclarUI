import React, { Suspense, lazy } from 'react';

const getQueryParam = (param) => {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param) || 'TestScreen';
};

export default function App() {
  const targetComponent = getQueryParam('component');

  const ComponentToRender = lazy(() =>
    import(`./generated/${targetComponent}`)
      .then((mod) => ({ default: mod.default || mod }))
      .catch((err) => {
        console.error('Failed to load dynamic component:', err);
        return {
          default: () => (
            <div style={{ padding: 20, color: 'red', fontFamily: 'sans-serif' }}>
              <h2>Component Load Error</h2>
              <p>{err.toString()}</p>
            </div>
          )
        };
      })
  );

  return (
    <div
      id="render-root"
      style={{
        width: '390px',
        height: '844px',
        backgroundColor: '#FFFFFF',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box'
      }}
    >
      <Suspense fallback={<div id="render-loading" style={{ width: '100%', height: '100%' }}>Loading...</div>}>
        <ComponentToRender />
      </Suspense>
    </div>
  );
}