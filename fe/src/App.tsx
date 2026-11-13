import "./App.css";
import DashboardLayout from "./layouts/DashboardLayout";
import DashboardPage from "./pages/Dashboard/DashboardPage";

function App() {
  return (
    <DashboardLayout>
      {(bookmarkList, filteredBookmarkList) => (
        <DashboardPage
          bookmarkList={bookmarkList}
          filteredBookmarkList={filteredBookmarkList}
        />
      )}
    </DashboardLayout>
  );
}

export default App;
