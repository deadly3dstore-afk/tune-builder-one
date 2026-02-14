import { PlaylistCard } from "@/components/PlaylistCard";
import { SongRow } from "@/components/SongRow";
import { mockSongs, mockPlaylists, mockArtists } from "@/lib/mock-data";
import { usePlayer } from "@/contexts/PlayerContext";
import { Play } from "lucide-react";

const Index = () => {
  const { playSong } = usePlayer();

  return (
    <div className="p-6 pb-8">
      {/* Hero greeting */}
      <section className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-6">İyi Akşamlar</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {mockPlaylists.slice(0, 6).map((pl) => (
            <button
              key={pl.id}
              onClick={() => playSong(mockSongs[0], mockSongs)}
              className="flex items-center gap-4 bg-accent/40 hover:bg-accent/70 rounded-md overflow-hidden group transition-colors"
            >
              <img src={pl.coverUrl} alt={pl.name} className="h-16 w-16 object-cover" />
              <span className="font-semibold text-sm text-foreground truncate flex-1 text-left">{pl.name}</span>
              <div className="mr-4 h-10 w-10 rounded-full bg-primary flex items-center justify-center opacity-0 group-hover:opacity-100 shadow-lg transition-all duration-300">
                <Play className="h-4 w-4 text-primary-foreground fill-current ml-0.5" />
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Featured Playlists */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-foreground mb-4">Sizin İçin Hazırlandı</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
          {mockPlaylists.map((pl) => (
            <PlaylistCard key={pl.id} {...pl} />
          ))}
        </div>
      </section>

      {/* Popular Artists */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-foreground mb-4">Popüler Sanatçılar</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
          {mockArtists.map((artist) => (
            <div key={artist.id} className="group bg-card hover:bg-accent/60 rounded-lg p-4 transition-all cursor-pointer text-center">
              <img
                src={artist.avatarUrl}
                alt={artist.name}
                className="w-full aspect-square object-cover rounded-full mb-4 shadow-lg shadow-black/40"
              />
              <h3 className="font-semibold text-foreground text-sm truncate">{artist.name}</h3>
              <p className="text-xs text-muted-foreground mt-1">Sanatçı</p>
            </div>
          ))}
        </div>
      </section>

      {/* Trending Songs */}
      <section>
        <h2 className="text-2xl font-bold text-foreground mb-4">Trend Şarkılar</h2>
        <div className="space-y-0.5">
          {mockSongs.map((song, i) => (
            <SongRow key={song.id} song={song} index={i} queue={mockSongs} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Index;
