import { Navbar } from "./Navbar";
import { Hero } from "./Hero";
import { EmailCapture } from "./EmailCapture";
import { VideoSection } from "./VideoSection";

export function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <VideoSection />
      <EmailCapture />
    </div>
  );
}