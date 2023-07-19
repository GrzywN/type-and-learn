import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { MockAuthAdapter } from '../../../../../environments/auth/mock-auth-adapter';
import { AuthProvider } from '../../../../shared/utils/auth';
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
