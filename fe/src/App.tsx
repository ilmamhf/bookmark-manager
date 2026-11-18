import "./App.css";
import DashboardLayout from "./layouts/DashboardLayout";
import DashboardPage from "./pages/Dashboard/DashboardPage";

function App() {
  return (
    <DashboardLayout>
      {(bookmarkList, filteredBookmarkList, handleOpenEditModal, handleTogglePin, handleToggleArchive) => (
        <DashboardPage
          bookmarkList={bookmarkList}
          filteredBookmarkList={filteredBookmarkList}
          handleOpenEditModal={handleOpenEditModal}
          handleTogglePin={handleTogglePin}
          handleToggleArchive={handleToggleArchive}
        />
      )}
    </DashboardLayout>
  );
}

export default App;
