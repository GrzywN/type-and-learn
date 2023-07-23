import { useAuth } from '@auth';
import { useGetUserCollections } from '@http';
import { ActionIcon, Group, Loader, Navbar, Text, TextInput, Tooltip, UnstyledButton } from '@mantine/core';
import { IconLogout, IconPlus, IconSearch, IconSelector, TablerIconsProps } from '@tabler/icons-react';
import { UserButton } from '@ui/molecules/user-button/user-button';
import { routes } from '@utils';
import { Link, useNavigate } from 'react-router-dom';

import { useMyNavbarStyles } from './my-navbar.styles';

export interface MyNavbarProps {
  links: { icon: React.FC<TablerIconsProps>; label: string; path: string }[];
  onLogout: () => void;
}

export function MyNavbar(props: MyNavbarProps) {
  const { links, onLogout } = props;
  const { classes } = useMyNavbarStyles();
  const navigate = useNavigate();
  const { user } = useAuth();
  const { isLoading, isError, data: userCollections } = useGetUserCollections();

  const mainLinks = links.map((link) => (
    <UnstyledButton key={link.label} className={classes.mainLink} onClick={() => navigate(link.path)}>
      <div className={classes.mainLinkInner}>
        <link.icon size={20} className={classes.mainLinkIcon} stroke={1.5} />
        <span>{link.label}</span>
      </div>
    </UnstyledButton>
  ));

  const flashcardLinks = userCollections?.map((collection) => (
    <Link to={routes.playOne.url(collection.id)} key={collection.id} className={classes.collectionLink}>
      {collection.name}
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
        <div className={classes.collections}>
          {isLoading ? <Loader /> : isError ? 'An error occurred' : flashcardLinks}
        </div>
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
