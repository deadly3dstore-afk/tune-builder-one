import { mockPlaylists } from "@/lib/mock-data";
import { PlaylistCard } from "@/components/PlaylistCard";
import { Music, Heart } from "lucide-react";
import { NavLink } from "@/components/NavLink";

const LibraryPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-foreground mb-6">Kitaplığın</h1>

      {/* Quick Links */}
      <div className="flex gap-3 mb-8">
        <NavLink
          to="/liked"
          className="flex items-center gap-3 bg-accent/50 hover:bg-accent rounded-md px-4 py-3 transition-colors"
        >
          <div className="h-12 w-12 rounded bg-gradient-to-br from-indigo-700 to-blue-300 flex items-center justify-center">
            <Heart className="h-5 w-5 text-white fill-white" />
          </div>
          <div>
            <p className="font-semibold text-foreground text-sm">Beğenilen Şarkılar</p>
            <p className="text-xs text-muted-foreground">12 şarkı</p>
          </div>
        </NavLink>
      </div>

      {/* Playlists */}
      <h2 className="text-xl font-bold text-foreground mb-4">Çalma Listelerin</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
        {mockPlaylists.map((pl) => (
          <PlaylistCard key={pl.id} {...pl} />
        ))}
      </div>
    </div>
  );
};

export default LibraryPage;
