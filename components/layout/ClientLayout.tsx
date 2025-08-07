"use client";

import { useState } from "react";
import { Navbar } from "./Navbar";
import { Sidebar } from "./Sidebar";
import { Footer } from "./Footer";

export const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <Navbar onToggleSidebar={() => setShowSidebar(true)} />
      <Sidebar isOpen={showSidebar} onClose={() => setShowSidebar(false)} />
      <main>{children}</main>
      <Footer />
    </>
  );
};
