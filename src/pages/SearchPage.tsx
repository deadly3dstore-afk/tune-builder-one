import { useState } from "react";
import { Search as SearchIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { mockSongs, mockArtists, mockAlbums } from "@/lib/mock-data";
import { SongRow } from "@/components/SongRow";

const SearchPage = () => {
  const [query, setQuery] = useState("");

  const filteredSongs = mockSongs.filter(
    (s) =>
      s.title.toLowerCase().includes(query.toLowerCase()) ||
      s.artist.toLowerCase().includes(query.toLowerCase())
  );

  const filteredArtists = mockArtists.filter((a) =>
    a.name.toLowerCase().includes(query.toLowerCase())
  );

  const genres = [
    { name: "Pop", color: "from-pink-600 to-rose-400" },
    { name: "Rock", color: "from-red-700 to-orange-500" },
    { name: "Hip Hop", color: "from-yellow-600 to-amber-400" },
    { name: "Arabesk", color: "from-purple-700 to-violet-400" },
    { name: "Klasik", color: "from-blue-700 to-cyan-400" },
    { name: "Caz", color: "from-green-700 to-emerald-400" },
    { name: "Elektronik", color: "from-indigo-700 to-blue-400" },
    { name: "Türk Halk", color: "from-orange-700 to-yellow-400" },
  ];

  return (
    <div className="p-6">
      <div className="relative max-w-md mb-8">
        <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Şarkı, sanatçı veya albüm ara..."
          className="pl-10 h-12 rounded-full bg-foreground text-background placeholder:text-background/50 border-none text-sm"
        />
      </div>

      {!query ? (
        <>
          <h2 className="text-2xl font-bold text-foreground mb-4">Hepsine Göz At</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {genres.map((g) => (
              <div
                key={g.name}
                className={`bg-gradient-to-br ${g.color} rounded-lg p-5 h-32 flex items-end cursor-pointer hover:scale-[1.02] transition-transform overflow-hidden relative`}
              >
                <span className="text-lg font-bold text-white">{g.name}</span>
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          {filteredArtists.length > 0 && (
            <section className="mb-8">
              <h3 className="text-lg font-semibold text-foreground mb-3">Sanatçılar</h3>
              <div className="flex gap-4 overflow-x-auto pb-2">
                {filteredArtists.map((a) => (
                  <div key={a.id} className="shrink-0 w-32 text-center">
                    <img src={a.avatarUrl} alt={a.name} className="w-24 h-24 rounded-full mx-auto object-cover" />
                    <p className="text-sm text-foreground mt-2 truncate">{a.name}</p>
                    <p className="text-xs text-muted-foreground">Sanatçı</p>
                  </div>
                ))}
              </div>
            </section>
          )}
          <section>
            <h3 className="text-lg font-semibold text-foreground mb-3">Şarkılar</h3>
            <div className="space-y-0.5">
              {filteredSongs.map((song, i) => (
                <SongRow key={song.id} song={song} index={i} queue={filteredSongs} />
              ))}
            </div>
            {filteredSongs.length === 0 && (
              <p className="text-muted-foreground text-sm">Sonuç bulunamadı.</p>
            )}
          </section>
        </>
      )}
    </div>
  );
};

export default SearchPage;
