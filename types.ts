/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Reciter {
  id: string;
  name: string;
  photoUrl: string;
  bio: string;
  surahCount: number;
  createdAt?: any;
  updatedAt?: any;
}

export interface Surah {
  id: string; // e.g., "001", "114"
  number: number; // 1 to 114
  name: string; // Arabic script name (e.g., "الفاتحة")
  audioUrl: string; // Mp3 audio stream link
  duration: number; // Duration in seconds
  createdAt?: any;
  updatedAt?: any;
}

export interface FavoriteItem {
  id: string; // unique favorite item doc ID
  type: 'reciter' | 'surah';
  reciterId: string;
  surahId?: string; // present if type is surah
  name: string; // Display name of favorited item (Arabic)
  reciterName?: string; // Name of the reciter (needed for listing)
  createdAt?: any;
}

export interface PlaybackState {
  currentReciter: Reciter | null;
  currentSurah: Surah | null;
  playlist: Surah[];
  isPlaying: boolean;
  progress: number; // in seconds
  duration: number; // in seconds
  repeatMode: 'none' | 'one' | 'all';
}

export type ThemeMode = 'light' | 'dark';

export interface AdminUser {
  uid: string;
  email: string;
  createdAt: any;
}
