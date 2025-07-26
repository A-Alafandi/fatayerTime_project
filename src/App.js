import React, { useEffect, Suspense, lazy } from 'react';
import PropTypes from 'prop-types';
import { Routes, Route } from 'react-router-dom';
import Spinner from './components/spinner/Spinner.jsx';
import './main.css';
import AOS from 'aos';

// Lazy load components
const HomePage = lazy(() => import('./components/HomePage.jsx'));
const NotFound = lazy(() => import('./components/NotFound.jsx'));

// Error boundary component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error('ErrorBoundary caught an error', error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
};

export default function App() {
  useEffect(() => {
    AOS.init({ once: true, duration: 700 });
  }, []);

  return (
    <ErrorBoundary>
      <Suspense fallback={<Spinner size="large" />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
}
