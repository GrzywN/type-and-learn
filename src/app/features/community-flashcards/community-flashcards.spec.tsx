import { render } from '@testing-library/react';

import CommunityFlashcards from './community-flashcards';

describe('CommunityFlashcards', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CommunityFlashcards />);
    expect(baseElement).toBeTruthy();
  });
});
