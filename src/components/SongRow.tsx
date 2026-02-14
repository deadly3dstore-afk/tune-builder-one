import { Play } from "lucide-react";
import { usePlayer } from "@/contexts/PlayerContext";
import { Song, formatDuration } from "@/lib/mock-data";

interface SongRowProps {
  song: Song;
  index: number;
  queue?: Song[];
}

export function SongRow({ song, index, queue }: SongRowProps) {
  const { playSong, currentSong, isPlaying } = usePlayer();
  const isActive = currentSong?.id === song.id;

  return (
    <button
      onClick={() => playSong(song, queue)}
      className={`w-full grid grid-cols-[32px_1fr_1fr_64px] gap-4 items-center px-4 py-2 rounded-md text-sm group transition-colors ${
        isActive ? "bg-accent/60" : "hover:bg-accent/40"
      }`}
    >
      <span className="text-right text-muted-foreground group-hover:hidden">
        {isActive && isPlaying ? (
          <span className="text-primary text-xs">♪</span>
        ) : (
          index + 1
        )}
      </span>
      <span className="hidden group-hover:block text-right">
        <Play className="h-4 w-4 ml-auto text-foreground fill-current" />
      </span>

      <div className="flex items-center gap-3 min-w-0 text-left">
        <img src={song.coverUrl} alt="" className="h-10 w-10 rounded object-cover" />
        <div className="min-w-0">
          <p className={`truncate font-medium ${isActive ? "text-primary" : "text-foreground"}`}>
            {song.title}
          </p>
          <p className="truncate text-xs text-muted-foreground">{song.artist}</p>
        </div>
      </div>

      <span className="text-muted-foreground truncate text-left">{song.album}</span>
      <span className="text-muted-foreground text-right">{formatDuration(song.duration)}</span>
    </button>
  );
}
