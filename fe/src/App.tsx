import "./App.css";
import DashboardLayout from "./layouts/DashboardLayout";
import DashboardPage from "./pages/Dashboard/DashboardPage";

function App() {
  return (
    <DashboardLayout>
      {(bookmarkList, filteredBookmarkList, handleOpenEditModal) => (
        <DashboardPage
          bookmarkList={bookmarkList}
          filteredBookmarkList={filteredBookmarkList}
          handleOpenEditModal={handleOpenEditModal}
        />
      )}
    </DashboardLayout>
  );
}

export default App;
