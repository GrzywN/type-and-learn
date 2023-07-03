export const routes = {
  home: {
    path: '/',
  },
  playOne: {
    path: '/play/:id',
    url: (param: string) => '/play/:id'.replace(':id', param),
  },
  playAll: {
    path: '/play',
  },
  flashcards: {
    path: '/flashcards',
  },
  community: {
    path: '/community',
  },
  settings: {
    path: '/settings',
  },
  login: {
    path: '/login',
  },
  register: {
    path: '/register',
  },
};
