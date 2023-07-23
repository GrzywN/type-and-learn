import { HttpProvider, MockHttpAdapter } from '@http';
import { render } from '@testing-library/react';

import { YourFlashcards } from './your-flashcards';

const http = new MockHttpAdapter();

describe('YourFlashcards', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <HttpProvider http={http}>
        <YourFlashcards />
      </HttpProvider>
    );
    expect(baseElement).toBeTruthy();
  });
});
