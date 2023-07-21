import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { AuthProvider, MockAuthAdapter } from '../../../../shared/auth';
import Login from './login';

const auth = new MockAuthAdapter();

describe('Login', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <MemoryRouter>
        <AuthProvider auth={auth}>
          <Login />
        </AuthProvider>
      </MemoryRouter>
    );
    expect(baseElement).toBeTruthy();
  });
});
