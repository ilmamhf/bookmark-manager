import Header from "./Header";
import Sidebar from "./Sidebar";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <main className="flex flex-col bg-blue-200 flex-1">
        <Header />
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
