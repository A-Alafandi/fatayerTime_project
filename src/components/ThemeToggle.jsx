import { useTheme } from "./ThemeContext"

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      <i className={theme === "dark" ? "bi bi-sun-fill" : "bi bi-moon-fill"}></i>
    </button>
  )
}

export default ThemeToggle