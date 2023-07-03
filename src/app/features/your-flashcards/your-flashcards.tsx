import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface YourFlashcardsProps {}

const StyledYourFlashcards = styled.div`
  color: pink;
`;

export function YourFlashcards(props: YourFlashcardsProps) {
  return (
    <StyledYourFlashcards>
      <h1>Welcome to YourFlashcards!</h1>
    </StyledYourFlashcards>
  );
}

export default YourFlashcards;
