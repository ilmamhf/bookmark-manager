import { useState } from "react";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";

interface DashboardLayoutProps {
  children: (searchQuery: string) => React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <main className="flex flex-col bg-blue-200 flex-1">
        <Header
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />
        {children(searchQuery)}
      </main>
    </div>
  );
};

export default DashboardLayout;
