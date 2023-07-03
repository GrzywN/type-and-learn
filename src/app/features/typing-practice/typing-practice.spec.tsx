import { render } from '@testing-library/react';

import TypingPractice from './typing-practice';

describe('TypingPractice', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TypingPractice />);
    expect(baseElement).toBeTruthy();
  });
});
