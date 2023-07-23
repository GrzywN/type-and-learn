import { HttpProvider, MockHttpAdapter } from '@http';
import { render } from '@testing-library/react';

import { CommunityFlashcards } from './community-flashcards';

const http = new MockHttpAdapter();

describe('CommunityFlashcards', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <HttpProvider http={http}>
        <CommunityFlashcards />
      </HttpProvider>
    );
    expect(baseElement).toBeTruthy();
  });
});
