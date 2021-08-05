import Head from "next/head";
import React, { Children } from "react";
import Header from "./Header";
import SideBar from "./SideBar";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="d-flex container">
      <Head>
        <title>TermMonitor Internship Assignment</title>
        <meta name="description" content="App created Using Next JS" />
        <link rel="icon" href="/logo.svg" />

        {/* Using Font Awesomes for icons */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
          integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>
      {/* Sidebar */}
      <SideBar />
      {/* Main Panel */}
      <div className="expand">
        {/* header */}
        <Header />
        {/* main content */}
        {children}
      </div>
    </div>
  );
}
