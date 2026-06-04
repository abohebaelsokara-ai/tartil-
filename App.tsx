/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { QuranDataProvider, useQuranData } from './context/QuranDataContext';
import { AndroidPhoneFrame } from './components/AndroidPhoneFrame';
import { SplashScreen } from './components/SplashScreen';
import { ReciterGrid } from './components/ReciterGrid';
import { SurahList } from './components/SurahList';
import { FavoritesScreen } from './components/FavoritesScreen';
import { DownloadsScreen } from './components/DownloadsScreen';
import { AdminPanel } from './components/AdminPanel';
import { MiniPlayer } from './components/MiniPlayer';
import { SettingsScreen } from './components/SettingsScreen';

function AppContent() {
  const { activeScreen } = useQuranData();

  if (activeScreen === 'splash') {
    return <SplashScreen />;
  }

  return (
    <AndroidPhoneFrame>
      <div className="flex-1 overflow-y-auto relative flex flex-col justify-between w-full h-full pb-20">
        {activeScreen === 'home' && <ReciterGrid />}
        {activeScreen === 'reciter' && <SurahList />}
        {activeScreen === 'favorites' && <FavoritesScreen />}
        {activeScreen === 'downloads' && <DownloadsScreen />}
        {activeScreen === 'admin' && <AdminPanel />}
        {activeScreen === 'settings' && <SettingsScreen />}
        
        {/* Dynamic bottom absolute player */}
        <MiniPlayer />
      </div>
    </AndroidPhoneFrame>
  );
}

export default function App() {
  return (
    <QuranDataProvider>
      <AppContent />
    </QuranDataProvider>
  );
}

