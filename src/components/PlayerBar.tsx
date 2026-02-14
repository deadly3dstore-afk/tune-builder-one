import {
  Play, Pause, SkipBack, SkipForward, Shuffle, Repeat, Repeat1,
  Volume2, Volume1, VolumeX, Heart
} from "lucide-react";
import { usePlayer } from "@/contexts/PlayerContext";
import { Slider } from "@/components/ui/slider";
import { formatDuration } from "@/lib/mock-data";

export function PlayerBar() {
  const {
    currentSong, isPlaying, togglePlay, nextSong, prevSong,
    volume, setVolume, currentTime, setCurrentTime,
    shuffle, toggleShuffle, repeat, toggleRepeat,
  } = usePlayer();

  if (!currentSong) {
    return (
      <footer className="h-[90px] bg-player border-t border-border flex items-center justify-center">
        <p className="text-sm text-muted-foreground">Dinlemek için bir şarkı seçin</p>
      </footer>
    );
  }

  const VolumeIcon = volume === 0 ? VolumeX : volume < 50 ? Volume1 : Volume2;
  const RepeatIcon = repeat === "one" ? Repeat1 : Repeat;

  return (
    <footer className="h-[90px] bg-player border-t border-border grid grid-cols-3 items-center px-4">
      {/* Left - Song Info */}
      <div className="flex items-center gap-3 min-w-0">
        <img
          src={currentSong.coverUrl}
          alt={currentSong.title}
          className="h-14 w-14 rounded object-cover"
        />
        <div className="min-w-0">
          <p className="text-sm font-medium text-foreground truncate">{currentSong.title}</p>
          <p className="text-xs text-muted-foreground truncate">{currentSong.artist}</p>
        </div>
        <button className="ml-2 text-muted-foreground hover:text-primary transition-colors shrink-0">
          <Heart className="h-4 w-4" />
        </button>
      </div>

      {/* Center - Controls */}
      <div className="flex flex-col items-center gap-1">
        <div className="flex items-center gap-4">
          <button
            onClick={toggleShuffle}
            className={`transition-colors ${shuffle ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}
          >
            <Shuffle className="h-4 w-4" />
          </button>
          <button onClick={prevSong} className="text-muted-foreground hover:text-foreground transition-colors">
            <SkipBack className="h-5 w-5 fill-current" />
          </button>
          <button
            onClick={togglePlay}
            className="h-8 w-8 rounded-full bg-foreground flex items-center justify-center hover:scale-105 transition-transform"
          >
            {isPlaying ? (
              <Pause className="h-4 w-4 text-background fill-current" />
            ) : (
              <Play className="h-4 w-4 text-background fill-current ml-0.5" />
            )}
          </button>
          <button onClick={nextSong} className="text-muted-foreground hover:text-foreground transition-colors">
            <SkipForward className="h-5 w-5 fill-current" />
          </button>
          <button
            onClick={toggleRepeat}
            className={`transition-colors ${repeat !== "off" ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}
          >
            <RepeatIcon className="h-4 w-4" />
          </button>
        </div>
        <div className="flex items-center gap-2 w-full max-w-md">
          <span className="text-xs text-muted-foreground w-10 text-right">{formatDuration(currentTime)}</span>
          <Slider
            value={[currentTime]}
            max={currentSong.duration}
            step={1}
            onValueChange={([v]) => setCurrentTime(v)}
            className="flex-1"
          />
          <span className="text-xs text-muted-foreground w-10">{formatDuration(currentSong.duration)}</span>
        </div>
      </div>

      {/* Right - Volume */}
      <div className="flex items-center justify-end gap-2">
        <button
          onClick={() => setVolume(volume === 0 ? 70 : 0)}
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          <VolumeIcon className="h-4 w-4" />
        </button>
        <Slider
          value={[volume]}
          max={100}
          step={1}
          onValueChange={([v]) => setVolume(v)}
          className="w-24"
        />
      </div>
    </footer>
  );
}
