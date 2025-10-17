import { Suspense, lazy, memo } from "react"
import { Routes, Route } from "react-router-dom"
import { ErrorBoundary } from "react-error-boundary"
import PropTypes from "prop-types"
import Spinner from "./components/Spinner.jsx"
import { ThemeProvider } from "./components/ThemeContext.js"

// Lazy load route components
const HomePage = lazy(() => import("./components/HomePage.jsx"))
const NotFound = lazy(() => import("./components/NotFound.jsx"))

// Minimal loading UI for route-level code-splitting
function LoadingFallback() {
  return (
    <div className="fullscreen-spinner-wrapper">
      <Spinner size="large" />
    </div>
  )
}

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div className="not-found-page">
      <div className="container text-center">
        <h1 className="display-4 text-danger">Er is iets misgegaan</h1>
        <p className="lead">{String(error?.message || error)}</p>
        <button className="btn btn-primary" onClick={resetErrorBoundary}>
          Opnieuw laden
        </button>
      </div>
    </div>
  )
}

ErrorFallback.propTypes = {
  error: PropTypes.any,
  resetErrorBoundary: PropTypes.func,
}

function App() {
  return (
    <ThemeProvider>
      <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => window.location.reload()}>
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </ThemeProvider>
  )
}

export default memo(App)