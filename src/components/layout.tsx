import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/navbar";

interface LayoutProps {
  children: ReactNode;
  className?: string;
}

export const Layout = ({ children, className }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className={cn("flex-grow", className)}>{children}</main>
      <footer className="py-6 text-center text-gray-500">
        © {new Date().getFullYear()} Sudo Web Solution. All rights reserved.
      </footer>
    </div>
  );
};
