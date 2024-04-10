import React from "react";
import Sidebar from "@/components/sidebar";
import InfoBar from "@/components/infobar";
import ModalProvider from "@/providers/modal-provider";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="flex overflow-hidden h-screen">
      <Sidebar />
      <div className="w-full">
        <InfoBar />
        <ModalProvider>{children}</ModalProvider>
      </div>
    </div>
  );
};

export default Layout;
