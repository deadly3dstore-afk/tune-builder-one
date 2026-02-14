export interface Song {
  id: string;
  title: string;
  artist: string;
  album: string;
  coverUrl: string;
  duration: number; // seconds
  audioUrl?: string;
}

export interface Playlist {
  id: string;
  name: string;
  description: string;
  coverUrl: string;
  songCount: number;
  owner: string;
}

export interface Album {
  id: string;
  name: string;
  artist: string;
  coverUrl: string;
  year: number;
  songs: Song[];
}

export interface Artist {
  id: string;
  name: string;
  avatarUrl: string;
  bio: string;
  monthlyListeners: number;
}

const covers = [
  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop",
  "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop",
  "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&h=300&fit=crop",
  "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=300&h=300&fit=crop",
  "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=300&h=300&fit=crop",
  "https://images.unsplash.com/photo-1485579149621-3123dd979885?w=300&h=300&fit=crop",
  "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=300&h=300&fit=crop",
  "https://images.unsplash.com/photo-1484755560615-a4c64e778a6c?w=300&h=300&fit=crop",
];

export const mockSongs: Song[] = [
  { id: "1", title: "Gece Yolculuğu", artist: "Yıldız Tilbe", album: "Geceler", coverUrl: covers[0], duration: 234 },
  { id: "2", title: "Rüzgar", artist: "Tarkan", album: "Metamorfoz", coverUrl: covers[1], duration: 198 },
  { id: "3", title: "Firuze", artist: "Sezen Aksu", album: "Bahane", coverUrl: covers[2], duration: 267 },
  { id: "4", title: "Yalnızlık", artist: "Müslüm Gürses", album: "Klasikler", coverUrl: covers[3], duration: 312 },
  { id: "5", title: "Aşk", artist: "Sertab Erener", album: "Rengarenk", coverUrl: covers[4], duration: 245 },
  { id: "6", title: "Hayat Bayram Olsa", artist: "Zeki Müren", album: "Altın Şarkılar", coverUrl: covers[5], duration: 289 },
  { id: "7", title: "Kanatlarım Var Ruhumda", artist: "Nil Karaibrahimgil", album: "Uçuş", coverUrl: covers[6], duration: 210 },
  { id: "8", title: "Sarı Çizmeli Mehmet Ağa", artist: "Barış Manço", album: "Dönence", coverUrl: covers[7], duration: 276 },
  { id: "9", title: "Geceler", artist: "Yıldız Tilbe", album: "Geceler", coverUrl: covers[0], duration: 198 },
  { id: "10", title: "Kuzu Kuzu", artist: "Tarkan", album: "Karma", coverUrl: covers[1], duration: 215 },
];

export const mockPlaylists: Playlist[] = [
  { id: "1", name: "Türkçe Pop Klasikleri", description: "En sevilen Türkçe pop şarkıları", coverUrl: covers[0], songCount: 50, owner: "Müzik Platformu" },
  { id: "2", name: "Arabesk Gecesi", description: "Duygusal arabesk şarkılar", coverUrl: covers[3], songCount: 35, owner: "Müzik Platformu" },
  { id: "3", name: "Rock Türkiye", description: "Türk rock müziğinin en iyileri", coverUrl: covers[6], songCount: 42, owner: "Müzik Platformu" },
  { id: "4", name: "Yeni Çıkanlar", description: "Bu haftanın yeni şarkıları", coverUrl: covers[4], songCount: 20, owner: "Müzik Platformu" },
  { id: "5", name: "90'lar Nostalji", description: "90'ların unutulmaz şarkıları", coverUrl: covers[2], songCount: 60, owner: "Müzik Platformu" },
  { id: "6", name: "Akustik Keyif", description: "Sakin ve akustik parçalar", coverUrl: covers[5], songCount: 30, owner: "Müzik Platformu" },
];

export const mockAlbums: Album[] = [
  { id: "1", name: "Metamorfoz", artist: "Tarkan", coverUrl: covers[1], year: 2008, songs: mockSongs.slice(0, 4) },
  { id: "2", name: "Bahane", artist: "Sezen Aksu", coverUrl: covers[2], year: 2005, songs: mockSongs.slice(2, 6) },
  { id: "3", name: "Dönence", artist: "Barış Manço", coverUrl: covers[7], year: 1986, songs: mockSongs.slice(5, 9) },
];

export const mockArtists: Artist[] = [
  { id: "1", name: "Tarkan", avatarUrl: covers[1], bio: "Türk pop müziğinin megastarı", monthlyListeners: 2500000 },
  { id: "2", name: "Sezen Aksu", avatarUrl: covers[2], bio: "Türk pop müziğinin minik serçesi", monthlyListeners: 1800000 },
  { id: "3", name: "Barış Manço", avatarUrl: covers[7], bio: "Türk rock müziğinin efsanesi", monthlyListeners: 1200000 },
  { id: "4", name: "Yıldız Tilbe", avatarUrl: covers[0], bio: "Türk müziğinin güçlü sesi", monthlyListeners: 900000 },
  { id: "5", name: "Müslüm Gürses", avatarUrl: covers[3], bio: "Arabeskin babası", monthlyListeners: 750000 },
];

export function formatDuration(seconds: number): string {
  const min = Math.floor(seconds / 60);
  const sec = seconds % 60;
  return `${min}:${sec.toString().padStart(2, "0")}`;
}
