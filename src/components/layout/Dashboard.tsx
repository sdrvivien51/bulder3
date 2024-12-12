import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Header } from "./Header";
import {
  BookOpen,
  Settings,
  Users,
  Newspaper,
  Bookmark,
  Heart,
} from "lucide-react";

export function Dashboard() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div
        className="h-[200px] w-full bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800&auto=format&fit=crop&q=60")',
        }}
      />
      <main className="container mx-auto flex-1 space-y-4 p-8 pt-6">
        <Tabs defaultValue="posts" className="space-y-4">
          <TabsList>
            <TabsTrigger value="posts">
              <BookOpen className="mr-2 h-4 w-4" />
              Posts
            </TabsTrigger>
            <TabsTrigger value="following">
              <Users className="mr-2 h-4 w-4" />
              Following
            </TabsTrigger>
            <TabsTrigger value="saved">
              <Bookmark className="mr-2 h-4 w-4" />
              Saved
            </TabsTrigger>
          </TabsList>
          <TabsContent value="posts" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-3">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2">
                    <Newspaper className="h-5 w-5" />
                    <h3 className="text-lg font-semibold">Your Posts</h3>
                  </div>
                  <p className="mt-2 text-sm text-gray-500">
                    You have written 12 posts
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2">
                    <Heart className="h-5 w-5" />
                    <h3 className="text-lg font-semibold">Total Likes</h3>
                  </div>
                  <p className="mt-2 text-sm text-gray-500">
                    Your posts received 256 likes
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2">
                    <Settings className="h-5 w-5" />
                    <h3 className="text-lg font-semibold">Settings</h3>
                  </div>
                  <p className="mt-2 text-sm text-gray-500">
                    Manage your account settings
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}