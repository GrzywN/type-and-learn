import { AppShell } from '@mantine/core';
import {
  IconBulb,
  IconCheckbox,
  IconSettings,
  IconUser,
} from '@tabler/icons-react';

import { routes } from '../../shared/utils/routes';
import { MyNavbar } from './components/my-navbar/my-navbar';

export interface DefaultLayoutProps {
  children: React.ReactNode;
}

const links = [
  { icon: IconBulb, label: 'Graj i ucz się', path: routes.home.path },
  { icon: IconCheckbox, label: 'Twoje fiszki', path: routes.flashcards.path },
  { icon: IconUser, label: 'Fiszki społeczności', path: routes.community.path },
  { icon: IconSettings, label: 'Ustawienia', path: routes.settings.path },
];

const flashcards = [
  { id: '1', emoji: '👍', label: 'Angielski Dział 1' },
  { id: '2', emoji: '🚚', label: 'Jakieś bzdury' },
  { id: '3', emoji: '💸', label: 'Żarty' },
  { id: '4', emoji: '💰', label: 'Hiszpański' },
];

export function DefaultLayout(props: DefaultLayoutProps) {
  const { children } = props;

  return (
    <AppShell
      padding="md"
      navbar={<MyNavbar links={links} flashcards={flashcards} />}
    >
      {children}
    </AppShell>
  );
}

export default DefaultLayout;
