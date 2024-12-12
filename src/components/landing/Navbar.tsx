import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Pen } from "lucide-react";

export function Navbar() {
  return (
    <nav className="border-b bg-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Pen className="h-6 w-6" />
          <span className="text-xl font-bold">Creator Platform</span>
        </div>
        <div className="flex items-center gap-4">
          <Link to="/login">
            <Button variant="ghost">Sign In</Button>
          </Link>
          <Link to="/login">
            <Button>Get Started</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}