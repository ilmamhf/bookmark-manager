import "./App.css";
import { BookmarkProvider } from "./features/bookmarks/context/BookmarkContext";
import DashboardLayout from "./layouts/DashboardLayout";
import DashboardPage from "./pages/Dashboard/DashboardPage";

function App() {
  return (
    <BookmarkProvider>
      <DashboardLayout>
        <DashboardPage />
      </DashboardLayout>
    </BookmarkProvider>
  );
}

export default App;
