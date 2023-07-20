import { render } from '@testing-library/react';

import { CardGradient } from './card-gradient';

describe('CardGradient', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <CardGradient
        title="Lorem ipsum"
        description="Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat."
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
