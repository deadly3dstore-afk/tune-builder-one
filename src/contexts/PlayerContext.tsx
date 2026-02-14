import React, { createContext, useContext, useState, useCallback } from "react";
import { Song, mockSongs } from "@/lib/mock-data";

interface PlayerState {
  currentSong: Song | null;
  isPlaying: boolean;
  queue: Song[];
  currentTime: number;
  volume: number;
  shuffle: boolean;
  repeat: "off" | "all" | "one";
}

interface PlayerContextType extends PlayerState {
  playSong: (song: Song, queue?: Song[]) => void;
  togglePlay: () => void;
  nextSong: () => void;
  prevSong: () => void;
  setVolume: (v: number) => void;
  setCurrentTime: (t: number) => void;
  toggleShuffle: () => void;
  toggleRepeat: () => void;
}

const PlayerContext = createContext<PlayerContextType | null>(null);

export function PlayerProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<PlayerState>({
    currentSong: null,
    isPlaying: false,
    queue: mockSongs,
    currentTime: 0,
    volume: 70,
    shuffle: false,
    repeat: "off",
  });

  const playSong = useCallback((song: Song, queue?: Song[]) => {
    setState((s) => ({
      ...s,
      currentSong: song,
      isPlaying: true,
      currentTime: 0,
      queue: queue || s.queue,
    }));
  }, []);

  const togglePlay = useCallback(() => {
    setState((s) => ({ ...s, isPlaying: !s.isPlaying }));
  }, []);

  const nextSong = useCallback(() => {
    setState((s) => {
      if (!s.currentSong || s.queue.length === 0) return s;
      const idx = s.queue.findIndex((x) => x.id === s.currentSong!.id);
      const next = s.queue[(idx + 1) % s.queue.length];
      return { ...s, currentSong: next, currentTime: 0, isPlaying: true };
    });
  }, []);

  const prevSong = useCallback(() => {
    setState((s) => {
      if (!s.currentSong || s.queue.length === 0) return s;
      const idx = s.queue.findIndex((x) => x.id === s.currentSong!.id);
      const prev = s.queue[(idx - 1 + s.queue.length) % s.queue.length];
      return { ...s, currentSong: prev, currentTime: 0, isPlaying: true };
    });
  }, []);

  const setVolume = useCallback((v: number) => {
    setState((s) => ({ ...s, volume: v }));
  }, []);

  const setCurrentTime = useCallback((t: number) => {
    setState((s) => ({ ...s, currentTime: t }));
  }, []);

  const toggleShuffle = useCallback(() => {
    setState((s) => ({ ...s, shuffle: !s.shuffle }));
  }, []);

  const toggleRepeat = useCallback(() => {
    setState((s) => ({
      ...s,
      repeat: s.repeat === "off" ? "all" : s.repeat === "all" ? "one" : "off",
    }));
  }, []);

  return (
    <PlayerContext.Provider
      value={{ ...state, playSong, togglePlay, nextSong, prevSong, setVolume, setCurrentTime, toggleShuffle, toggleRepeat }}
    >
      {children}
    </PlayerContext.Provider>
  );
}

export function usePlayer() {
  const ctx = useContext(PlayerContext);
  if (!ctx) throw new Error("usePlayer must be used within PlayerProvider");
  return ctx;
}
