import { render } from '@testing-library/react';

import { UserButton } from './user-button';

describe('UserButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <UserButton
        image="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQIW2M4c+bMfwAIMANkGnrzgAAAAABJRU5ErkJggg=="
        name="Lorem ipsum"
        email="janedoe@example.com"
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
