"use client";

import "./globals.css";
import { useState, ReactNode } from "react";
import { FormContext } from "../context/FormContext";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { IntegrationBeam } from "@/components/ui/IntegrationBeam";
import Particles from "@/components/ui/particles";

import { cn } from "@/lib/utils";

interface LayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  const [showForm, setShowForm] = useState(false);

  const handleRegisterClick = () => {
    setShowForm(!showForm);
  };

  return (
    <html lang="en">
      <body className={cn("min-h-screen bg-body font-sans antialiased")}>
        <FormContext.Provider value={{ showForm, setShowForm }}>
          <div className="relative flex min-h-screen flex-col">
            <Navbar handleRegisterClick={handleRegisterClick} />
            <Particles
              className="absolute inset-0 -z-20"
              quantity={100}
              ease={80}
              color={"#000000"}
              refresh
            />
            <div className="fixed inset-0">
              <IntegrationBeam />
            </div>
            <div className="mx-auto grow lg:container">{children}</div>
            <div className="relative">
              <Footer />
            </div>
          </div>
        </FormContext.Provider>
      </body>
    </html>
  );
}
