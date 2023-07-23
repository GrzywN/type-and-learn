import { AuthProvider, MockAuthAdapter } from '@auth';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Register from './register';

const auth = new MockAuthAdapter();

describe('Register', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <MemoryRouter>
        <AuthProvider auth={auth}>
          <Register />
        </AuthProvider>
      </MemoryRouter>
    );
    expect(baseElement).toBeTruthy();
  });
});
