import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { MockAuthAdapter } from '../../../environments/auth/mock-auth-adapter';
import { AuthProvider } from '../../shared/utils/auth';
import { DefaultLayout } from './default-layout';

const auth = new MockAuthAdapter();

describe('DefaultLayout', () => {
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
        <AuthProvider auth={auth}>
          <DefaultLayout>Children</DefaultLayout>
        </AuthProvider>
      </MemoryRouter>
    );
    expect(baseElement).toBeTruthy();
  });
});
