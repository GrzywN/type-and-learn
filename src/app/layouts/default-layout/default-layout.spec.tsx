import { AuthProvider, MockAuthAdapter } from '@auth';
import { HttpProvider, MockHttpAdapter } from '@http';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { DefaultLayout } from './default-layout';

const http = new MockHttpAdapter();
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
        <HttpProvider http={http}>
          <AuthProvider auth={auth}>
            <DefaultLayout>Children</DefaultLayout>
          </AuthProvider>
        </HttpProvider>
      </MemoryRouter>
    );
    expect(baseElement).toBeTruthy();
  });
});
