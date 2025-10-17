import { createContext, useContext, useState, useEffect } from "react"
import PropTypes from "prop-types"

const ThemeContext = createContext()

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    // Check localStorage first, then system preference, default to dark
    const savedTheme = localStorage.getItem("fatayer-theme")
    if (savedTheme) {
      return savedTheme
    }

    // Check system preference
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches) {
      return "light"
    }

    return "dark"
  })

  useEffect(() => {
    // Apply theme to document
    document.documentElement.setAttribute("data-theme", theme)
    localStorage.setItem("fatayer-theme", theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"))
  }

  const value = {
    theme,
    toggleTheme,
    isDark: theme === "dark",
    isLight: theme === "light",
  }

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
}
