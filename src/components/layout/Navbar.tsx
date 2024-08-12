"use client";

import { FC } from "react";
import { useRouter } from "next/navigation";
import ShimmerButton from "@/components/ui/shimmer-button";
import { Button } from "../ui/button";
import Image from "next/image";

interface NavbarProps {
  handleRegisterClick: () => void;
}

const Navbar: FC<NavbarProps> = ({ handleRegisterClick }) => {
  const router = useRouter();

  const handleLogin = () => {
    router.push("/dash/institution");
  };

  return (
    <div className="supports-backdrop-blur:bg-background/90 sticky top-0 z-40 h-[70px] w-full border-b border-border bg-background/40 backdrop-blur-lg">
      <div className="container mx-auto flex items-center justify-between">
        <Image src="/URA-logo-1.png" width={100} height={100} alt="URA Logo" />
        <div className="flex items-center space-x-4">
          <Button onClick={handleLogin}>Login</Button>
          <ShimmerButton
            onClick={handleRegisterClick}
            className="w-full max-w-[200px] shadow-2xl max-h-[40px]"
          >
            <span className="lg:text-lg whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10">
              Register
            </span>
          </ShimmerButton>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
