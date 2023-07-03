import {
  IconBulb,
  IconCheckbox,
  IconSettings,
  IconUser,
} from '@tabler/icons-react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { routes } from '../../../../shared/utils/routes';
import { MyNavbar } from './my-navbar';

const links = [
  { icon: IconBulb, label: 'Graj i ucz się', path: routes.home.path },
  { icon: IconCheckbox, label: 'Twoje fiszki', path: routes.flashcards.path },
  { icon: IconUser, label: 'Fiszki społeczności', path: routes.community.path },
  { icon: IconSettings, label: 'Ustawienia', path: routes.settings.path },
];

const flashcards = [{ id: '1', emoji: '👍', label: 'Angielski Dział 1' }];

describe('MyNavbar', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: vi.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: vi.fn(), // Deprecated
        removeListener: vi.fn(), // Deprecated
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
      })),
    });
  });

  it('should render successfully', () => {
    const { baseElement } = render(
      <MemoryRouter>
        <MyNavbar links={links} flashcards={flashcards} />
      </MemoryRouter>
    );
    expect(baseElement).toBeTruthy();
  });
});
