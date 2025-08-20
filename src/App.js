import { Suspense, lazy, memo } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import PropTypes from 'prop-types';
import Spinner from './components/spinner/Spinner.jsx';

// Lazy load route components
const HomePage = lazy(() => import('./components/HomePage.jsx'));
const NotFound = lazy(() => import('./components/NotFound.jsx'));

// Minimal loading UI for route-level code-splitting
function LoadingFallback() {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '40vh' }}>
      <Spinner />
    </div>
  );
}

// Error boundary UI
function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div className="container py-5">
      <h1 className="h4 mb-3">Er is iets misgegaan</h1>
      <pre className="bg-light p-3 rounded small">{String(error?.message || error)}</pre>
      <button className="btn btn-primary mt-3" onClick={resetErrorBoundary}>
        Opnieuw laden
      </button>
    </div>
  );
}

ErrorFallback.propTypes = {
  error: PropTypes.any,
  resetErrorBoundary: PropTypes.func,
};

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => window.location.reload()}>
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
}

export default memo(App);
