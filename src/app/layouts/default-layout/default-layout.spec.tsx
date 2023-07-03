import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { DefaultLayout } from './default-layout';

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
      <BrowserRouter>
        <DefaultLayout>Children</DefaultLayout>
      </BrowserRouter>
    );
    expect(baseElement).toBeTruthy();
  });
});
