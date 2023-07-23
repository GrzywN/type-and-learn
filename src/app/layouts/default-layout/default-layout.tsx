import { useAuth } from '@auth';
import { AppShell } from '@mantine/core';
import { IconBulb, IconCheckbox, IconSettings, IconUser } from '@tabler/icons-react';
import { routes } from '@utils';
import { useNavigate } from 'react-router-dom';

import { MyNavbar } from './components/my-navbar/my-navbar';

export interface DefaultLayoutProps {
  children: React.ReactNode;
}

const links = [
  { icon: IconBulb, label: 'Play and learn', path: routes.home.path },
  { icon: IconCheckbox, label: 'Your flashcards', path: routes.flashcards.path },
  { icon: IconUser, label: 'Community', path: routes.community.path },
  { icon: IconSettings, label: 'Settings', path: routes.settings.path },
];

const flashcards = [
  { id: '1', emoji: '👍', label: 'English' },
  { id: '2', emoji: '💸', label: 'Daddy jokes' },
];

export function DefaultLayout(props: DefaultLayoutProps) {
  const { children } = props;
  const { auth } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.logout();
    navigate(routes.login.path);
  };

  return (
    <AppShell
      padding="md"
      navbar={<MyNavbar links={links} flashcards={flashcards} onLogout={handleLogout} />}
    >
      {children}
    </AppShell>
  );
}

export default DefaultLayout;
