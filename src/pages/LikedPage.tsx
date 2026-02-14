import { Heart } from "lucide-react";
import { mockSongs } from "@/lib/mock-data";
import { SongRow } from "@/components/SongRow";

const LikedPage = () => {
  return (
    <div>
      {/* Header */}
      <div className="bg-gradient-to-b from-indigo-700 to-background p-6 pb-8">
        <div className="flex items-end gap-6">
          <div className="h-48 w-48 rounded bg-gradient-to-br from-indigo-600 to-blue-300 flex items-center justify-center shadow-2xl shadow-indigo-900/50 shrink-0">
            <Heart className="h-20 w-20 text-white fill-white" />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase text-foreground/80">Çalma Listesi</p>
            <h1 className="text-5xl font-bold text-foreground mt-1 mb-4">Beğenilen Şarkılar</h1>
            <p className="text-sm text-foreground/70">{mockSongs.length} şarkı</p>
          </div>
        </div>
      </div>

      {/* Song List */}
      <div className="p-6 space-y-0.5">
        {mockSongs.map((song, i) => (
          <SongRow key={song.id} song={song} index={i} queue={mockSongs} />
        ))}
      </div>
    </div>
  );
};

export default LikedPage;
