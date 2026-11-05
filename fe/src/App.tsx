import "./App.css";
import DashboardLayout from "./layouts/DashboardLayout";
import DashboardPage from "./pages/DashboardPage";

function App() {
  return (
    <DashboardLayout>
      {(searchQuery) => <DashboardPage searchQuery={searchQuery} />}
    </DashboardLayout>
  );
}

export default App;
