export default function ThemeSwitcher({ themeContext }) {
  const { theme, setTheme, themes } = themeContext;

  return (
    <div className="theme-switcher">
      <details>
        <summary aria-label="Choose theme">Theme</summary>
        <div className="theme-menu glass-panel">
          {themes.map((item) => (
            <button
              key={item}
              type="button"
              className={item === theme ? "theme-btn active" : "theme-btn"}
              onClick={() => setTheme(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </details>
    </div>
  );
}
