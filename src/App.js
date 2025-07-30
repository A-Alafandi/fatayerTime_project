import { useEffect, Suspense, lazy, memo } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import PropTypes from 'prop-types';
import Spinner from './components/spinner/Spinner.jsx';
import './main.css';
import AOS from 'aos';

// Lazy load components with better chunk names
const HomePage = lazy(
  () => import(/* webpackChunkName: "home-page" */ './components/HomePage.jsx')
);
const NotFound = lazy(
  () => import(/* webpackChunkName: "not-found" */ './components/NotFound.jsx')
);

// Memoized error fallback component
const ErrorFallback = memo(({ error, resetErrorBoundary }) => (
  <div role="alert" className="error-boundary">
    <h1>Something went wrong:</h1>
    <pre style={{ color: 'red' }}>{error.message}</pre>
    <button onClick={resetErrorBoundary}>Try again</button>
  </div>
));

ErrorFallback.displayName = 'ErrorFallback';

// Add PropTypes validation
ErrorFallback.propTypes = {
  error: PropTypes.shape({
    message: PropTypes.string.isRequired,
  }).isRequired,
  resetErrorBoundary: PropTypes.func.isRequired,
};

// Memoized loading component
const LoadingFallback = memo(() => <Spinner size="large" />);
LoadingFallback.displayName = 'LoadingFallback';

// Main App component
function App() {
  useEffect(() => {
    // Initialize AOS with optimized settings
    AOS.init({
      once: true,
      duration: 700,
      // Performance optimizations
      disable: 'mobile', // Disable on mobile for better performance
      startEvent: 'DOMContentLoaded',
      useClassNames: true,
      disableMutationObserver: false,
      debounceDelay: 50,
      throttleDelay: 99,
    });

    // Cleanup function
    return () => {
      AOS.refresh();
    };
  }, []);

  // Error handler
  const handleError = (error, errorInfo) => {
    console.error('Application Error:', error);
    console.error('Error Info:', errorInfo);
  };

  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onError={handleError}
      onReset={() => window.location.reload()}
    >
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
}

// Export memoized App component
export default memo(App);
