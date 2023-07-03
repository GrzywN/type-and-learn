import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface CommunityFlashcardsProps {}

const StyledCommunityFlashcards = styled.div`
  color: pink;
`;

export function CommunityFlashcards(props: CommunityFlashcardsProps) {
  return (
    <StyledCommunityFlashcards>
      <h1>Welcome to CommunityFlashcards!</h1>
    </StyledCommunityFlashcards>
  );
}

export default CommunityFlashcards;
