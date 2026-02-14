import { ReactNode } from "react";
import { AppSidebar } from "@/components/AppSidebar";
import { PlayerBar } from "@/components/PlayerBar";
import { ScrollArea } from "@/components/ui/scroll-area";

export function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col h-screen w-full overflow-hidden">
      <div className="flex flex-1 min-h-0">
        <AppSidebar />
        <ScrollArea className="flex-1">
          <main className="min-h-full">
            {children}
          </main>
        </ScrollArea>
      </div>
      <PlayerBar />
    </div>
  );
}
