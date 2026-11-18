import "./App.css";
import DashboardLayout from "./layouts/DashboardLayout";
import DashboardPage from "./pages/Dashboard/DashboardPage";

function App() {
  return (
    <DashboardLayout>
      {(bookmarkList, filteredBookmarkList, handleOpenEditModal, handleTogglePin) => (
        <DashboardPage
          bookmarkList={bookmarkList}
          filteredBookmarkList={filteredBookmarkList}
          handleOpenEditModal={handleOpenEditModal}
          handleTogglePin={handleTogglePin}
        />
      )}
    </DashboardLayout>
  );
}

export default App;
