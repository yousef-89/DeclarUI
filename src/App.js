import React, { Component, Suspense, lazy, useMemo } from 'react';
import renderStamp from './render-stamp.json';

// Exposed so the headless renderer can confirm the dev server has compiled the
// latest generated source before taking a screenshot.
window.__RENDER_STAMP__ = renderStamp.stamp;

const getQueryParam = (param) => {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
};

const getDimension = (param, fallback) => {
  const value = Number.parseInt(getQueryParam(param), 10);
  return Number.isInteger(value) && value > 0 ? value : fallback;
};

function RenderError({ title, error }) {
  return (
    <div
      id="render-error"
      data-message={String(error)}
      style={{ padding: 20, color: 'red', fontFamily: 'sans-serif' }}
    >
      <h2>{title}</h2>
      <p>{String(error)}</p>
    </div>
  );
}

class RenderErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  render() {
    if (this.state.error) {
      return <RenderError title="Component Runtime Error" error={this.state.error} />;
    }
    return this.props.children;
  }
}

export default function App() {
  const appName = getQueryParam('app') || '';
  const targetComponent = getQueryParam('component') || '';
  const width = getDimension('width', 390);
  const height = getDimension('height', 844);

  const ComponentToRender = useMemo(() => {
    const loadComponent = () => {
      if (!appName || !targetComponent) {
        return Promise.reject(
          new Error('Open a screen with ?app=<App>&component=<Screen>, e.g. ?app=Breadfast&component=IMG9052Screen.')
        );
      }
      return import(`./generated/${appName}/${targetComponent}`);
    };

    return lazy(() =>
      loadComponent()
        .then((mod) => {
          const namedComponent = mod[targetComponent];
          const component = mod.default || namedComponent;
          if (typeof component !== 'function' && typeof component !== 'object') {
            throw new Error(
              `Module does not export a React component named "${targetComponent}".`
            );
          }
          return { default: component };
        })
        .catch((err) => {
          console.error('Failed to load dynamic component:', err);
          return {
            default: () => <RenderError title="Component Load Error" error={err} />
          };
        })
    );
  }, [appName, targetComponent]);

  return (
    <div
      id="render-root"
      style={{
        width: `${width}px`,
        height: `${height}px`,
        backgroundColor: '#FFFFFF',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <RenderErrorBoundary>
        <Suspense fallback={<div id="render-loading" style={{ width: '100%', height: '100%' }}>Loading...</div>}>
          <ComponentToRender />
        </Suspense>
      </RenderErrorBoundary>
    </div>
  );
}
