import { useEffect, useMemo, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import SiteLayout from "./components/SiteLayout";
import HomePage from "./pages/HomePage";
import GuidePage from "./pages/GuidePage";
import GuidesHubPage from "./pages/GuidesHubPage";
import NotebooksPage from "./pages/NotebooksPage";
import ToolsPage from "./pages/ToolsPage";

const THEMES = ["modern", "cyberpunk", "minimal", "sunset"];

export default function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("data-theme");
    return THEMES.includes(savedTheme) ? savedTheme : "modern";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("data-theme", theme);
  }, [theme]);

  const contextValue = useMemo(
    () => ({ theme, setTheme, themes: THEMES }),
    [theme]
  );

  return (
    <SiteLayout themeContext={contextValue}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/guides" element={<GuidesHubPage />} />
        <Route path="/guides/:slug" element={<GuidePage />} />
        <Route path="/notebooks" element={<NotebooksPage />} />
        <Route path="/tools" element={<ToolsPage />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </SiteLayout>
  );
}
