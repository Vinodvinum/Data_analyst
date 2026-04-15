import { Navigate, Route, Routes } from "react-router-dom";
import SiteLayout from "./components/SiteLayout";
import HomePage from "./pages/HomePage";
import GuidePage from "./pages/GuidePage";
import GuidesHubPage from "./pages/GuidesHubPage";
import NotebooksPage from "./pages/NotebooksPage";
import ToolsPage from "./pages/ToolsPage";
import LegacyHubPage from "./pages/LegacyHubPage";

export default function App() {
  return (
    <SiteLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/guides" element={<GuidesHubPage />} />
        <Route path="/guides/:slug" element={<GuidePage />} />
        <Route path="/notebooks" element={<NotebooksPage />} />
        <Route path="/tools" element={<ToolsPage />} />
        <Route path="/legacy" element={<LegacyHubPage />} />
        <Route path="/react-home" element={<Navigate to="/" replace />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </SiteLayout>
  );
}
