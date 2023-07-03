import { Route, Routes } from 'react-router-dom';

import { CommunityFlashcards } from './features/community-flashcards/community-flashcards';
import { Home } from './features/home/home';
import { Settings } from './features/settings/settings';
import { TypingPractice } from './features/typing-practice/typing-practice';
import { YourFlashcards } from './features/your-flashcards/your-flashcards';
import { routes } from './shared/utils/routes';

export function AppRoutes() {
  return (
    <Routes>
      <Route path={routes.home.path} element={<Home />} />
      <Route path={routes.playOne.path} element={<TypingPractice />} />
      <Route path={routes.playAll.path} element={<TypingPractice />} />
      <Route path={routes.flashcards.path} element={<YourFlashcards />} />
      <Route path={routes.community.path} element={<CommunityFlashcards />} />
      <Route path={routes.settings.path} element={<Settings />} />
    </Routes>
  );
}

export default AppRoutes;
