import { Play } from "lucide-react";
import { usePlayer } from "@/contexts/PlayerContext";
import { mockSongs } from "@/lib/mock-data";

interface PlaylistCardProps {
  id: string;
  name: string;
  description: string;
  coverUrl: string;
}

export function PlaylistCard({ name, description, coverUrl }: PlaylistCardProps) {
  const { playSong } = usePlayer();

  return (
    <div className="group relative bg-card hover:bg-accent/60 rounded-lg p-4 transition-all duration-300 cursor-pointer">
      <div className="relative mb-4">
        <img
          src={coverUrl}
          alt={name}
          className="w-full aspect-square object-cover rounded-md shadow-lg shadow-black/40"
        />
        <button
          onClick={() => playSong(mockSongs[0], mockSongs)}
          className="absolute bottom-2 right-2 h-12 w-12 rounded-full bg-primary flex items-center justify-center shadow-xl opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:scale-105"
        >
          <Play className="h-5 w-5 text-primary-foreground fill-current ml-0.5" />
        </button>
      </div>
      <h3 className="font-semibold text-foreground truncate text-sm">{name}</h3>
      <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{description}</p>
    </div>
  );
}
