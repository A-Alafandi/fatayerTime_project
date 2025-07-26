import { useEffect, Suspense, lazy } from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import Spinner from "./components/spinner/Spinner"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import './main.css'
import AOS from "aos"
import "aos/dist/aos.css"

// Lazy load components
const HomePage = lazy(() => import("./components/HomePage"))
const MenuPage = lazy(() => import("./components/Menu/MenuPage"))
const NotFound = lazy(() => import("./components/NotFound"))


// Error boundary component
function ErrorBoundary({ children }) {
    return children
}

export default function App() {
    useEffect(() => {
        AOS.init({ once: true, duration: 700 })
    }, [])

    return (
        <ErrorBoundary>
            <Suspense fallback={<Spinner size="large" />}>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Suspense>
        </ErrorBoundary>
    )
}
