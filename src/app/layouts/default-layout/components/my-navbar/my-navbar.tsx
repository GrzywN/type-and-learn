import { ActionIcon, Group, Navbar, Text, TextInput, Tooltip, UnstyledButton, rem } from '@mantine/core';
import { IconLogout, IconPlus, IconSearch, IconSelector, TablerIconsProps } from '@tabler/icons-react';
import { Link, useNavigate } from 'react-router-dom';

import { useAuth } from '../../../../shared/auth';
import { UserButton } from '../../../../shared/ui/molecules/user-button/user-button';
import { routes } from '../../../../shared/utils/routes';
import { useMyNavbarStyles } from './my-navbar.styles';

export interface MyNavbarProps {
  links: { icon: React.FC<TablerIconsProps>; label: string; path: string }[];
  flashcards: { id: string; emoji: string; label: string }[];
  onLogout: () => void;
}

export function MyNavbar(props: MyNavbarProps) {
  const { links, flashcards, onLogout } = props;
  const { classes } = useMyNavbarStyles();
  const navigate = useNavigate();
  const { user } = useAuth();

  const mainLinks = links.map((link) => (
    <UnstyledButton key={link.label} className={classes.mainLink} onClick={() => navigate(link.path)}>
      <div className={classes.mainLinkInner}>
        <link.icon size={20} className={classes.mainLinkIcon} stroke={1.5} />
        <span>{link.label}</span>
      </div>
    </UnstyledButton>
  ));

  const flashcardLinks = flashcards.map((collection) => (
    <Link to={routes.playOne.url(collection.id)} key={collection.label} className={classes.collectionLink}>
      <span style={{ marginRight: rem(9), fontSize: rem(16) }}>{collection.emoji}</span> {collection.label}
    </Link>
  ));

  return (
    <Navbar width={{ sm: 300 }} p="md" className={classes.navbar}>
      <Navbar.Section className={classes.section}>
        <UserButton
          image="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQIW2M4c+bMfwAIMANkGnrzgAAAAABJRU5ErkJggg=="
          name={user.currentUser?.username ?? 'An error occurred!'}
          email={user.currentUser?.email ?? 'An error occurred!'}
          icon={<IconSelector size="0.9rem" stroke={1.5} />}
        />
      </Navbar.Section>
      <TextInput
        placeholder="Search"
        size="xs"
        icon={<IconSearch size="0.8rem" stroke={1.5} />}
        styles={{ rightSection: { pointerEvents: 'none' } }}
        mb="sm"
      />
      <Navbar.Section className={classes.section}>
        <div className={classes.mainLinks}>{mainLinks}</div>
      </Navbar.Section>
      <Navbar.Section className={classes.section} style={{ flex: 1 }}>
        <Group className={classes.collectionsHeader} position="apart">
          <Text size="xs" weight={500} color="dimmed">
            Your flashcard collections
          </Text>
          <Tooltip label="Create new flashcard collection" withArrow position="right">
            <ActionIcon variant="default" size={18}>
              <IconPlus size="0.8rem" stroke={1.5} />
            </ActionIcon>
          </Tooltip>
        </Group>
        <div className={classes.collections}>{flashcardLinks}</div>
      </Navbar.Section>
      <Navbar.Section>
        <a
          href={routes.login.path}
          className={classes.link}
          onClick={(event) => {
            event.preventDefault();
            onLogout();
          }}
        >
          <IconLogout className={classes.linkIcon} stroke={1.5} />
          <span>Logout</span>
        </a>
      </Navbar.Section>
    </Navbar>
  );
}

export default MyNavbar;
