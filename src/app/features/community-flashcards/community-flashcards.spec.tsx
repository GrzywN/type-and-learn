import { render } from '@testing-library/react';

import { HttpProvider, MockHttpAdapter } from '../../shared/http';
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
