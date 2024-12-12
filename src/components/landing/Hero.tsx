import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center py-20 text-center lg:py-32">
          <h1 className="max-w-4xl text-5xl font-bold tracking-tight text-gray-900 sm:text-7xl">
            Share your knowledge.
            <span className="block text-blue-600">Get recognized.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-gray-600">
            Join a community of creators sharing valuable insights and building their personal brand.
            Start writing today and connect with readers who value your expertise.
          </p>
          <div className="mt-10 flex items-center gap-4">
            <Button size="lg" className="gap-2">
              Start Writing <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}