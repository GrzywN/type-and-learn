import { render } from '@testing-library/react';

import YourFlashcards from './your-flashcards';

describe('YourFlashcards', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<YourFlashcards />);
    expect(baseElement).toBeTruthy();
  });
});
