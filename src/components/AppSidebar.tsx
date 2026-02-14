import { Home, Search, Library, Plus, Heart, Music2 } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { mockPlaylists } from "@/lib/mock-data";
import { ScrollArea } from "@/components/ui/scroll-area";

export function AppSidebar() {
  return (
    <aside className="hidden md:flex flex-col w-[280px] min-w-[280px] bg-sidebar h-full">
      {/* Logo */}
      <div className="p-6 pb-4">
        <div className="flex items-center gap-2">
          <Music2 className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold text-foreground tracking-tight" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Melodify
          </span>
        </div>
      </div>

      {/* Main Nav */}
      <nav className="px-3 space-y-1">
        <NavLink
          to="/"
          end
          className="flex items-center gap-4 px-3 py-2 rounded-md text-sm font-medium text-sidebar-foreground hover:text-foreground transition-colors"
          activeClassName="text-foreground bg-sidebar-accent"
        >
          <Home className="h-5 w-5" />
          <span>Ana Sayfa</span>
        </NavLink>
        <NavLink
          to="/search"
          className="flex items-center gap-4 px-3 py-2 rounded-md text-sm font-medium text-sidebar-foreground hover:text-foreground transition-colors"
          activeClassName="text-foreground bg-sidebar-accent"
        >
          <Search className="h-5 w-5" />
          <span>Ara</span>
        </NavLink>
        <NavLink
          to="/library"
          className="flex items-center gap-4 px-3 py-2 rounded-md text-sm font-medium text-sidebar-foreground hover:text-foreground transition-colors"
          activeClassName="text-foreground bg-sidebar-accent"
        >
          <Library className="h-5 w-5" />
          <span>Kitaplığın</span>
        </NavLink>
      </nav>

      {/* Divider */}
      <div className="mx-6 my-4 border-t border-border" />

      {/* Quick Actions */}
      <div className="px-3 space-y-1">
        <button className="flex items-center gap-4 px-3 py-2 rounded-md text-sm font-medium text-sidebar-foreground hover:text-foreground transition-colors w-full text-left">
          <div className="h-6 w-6 rounded-sm bg-sidebar-foreground/80 flex items-center justify-center">
            <Plus className="h-4 w-4 text-sidebar" />
          </div>
          <span>Çalma Listesi Oluştur</span>
        </button>
        <NavLink
          to="/liked"
          className="flex items-center gap-4 px-3 py-2 rounded-md text-sm font-medium text-sidebar-foreground hover:text-foreground transition-colors"
          activeClassName="text-foreground bg-sidebar-accent"
        >
          <div className="h-6 w-6 rounded-sm bg-gradient-to-br from-indigo-700 to-blue-300 flex items-center justify-center">
            <Heart className="h-3.5 w-3.5 text-white fill-white" />
          </div>
          <span>Beğenilen Şarkılar</span>
        </NavLink>
      </div>

      {/* Divider */}
      <div className="mx-6 my-4 border-t border-border" />

      {/* Playlists */}
      <ScrollArea className="flex-1 px-3">
        <div className="space-y-0.5 pb-4">
          {mockPlaylists.map((pl) => (
            <NavLink
              key={pl.id}
              to={`/playlist/${pl.id}`}
              className="block px-3 py-1.5 text-sm text-sidebar-foreground hover:text-foreground truncate transition-colors"
              activeClassName="text-foreground"
            >
              {pl.name}
            </NavLink>
          ))}
        </div>
      </ScrollArea>
    </aside>
  );
}
