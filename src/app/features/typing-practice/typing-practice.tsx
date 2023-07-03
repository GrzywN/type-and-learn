import styled from '@emotion/styled';
import { useParams } from 'react-router-dom';

/* eslint-disable-next-line */
export interface TypingPracticeProps {}

const StyledTypingPractice = styled.div`
  color: pink;
`;

export function TypingPractice(props: TypingPracticeProps) {
  const { id } = useParams<{ id: string }>();

  return (
    <StyledTypingPractice>
      <h1>
        Welcome to TypingPractice! {id ? 'ID: ' : ''}
        {id}
      </h1>
    </StyledTypingPractice>
  );
}

export default TypingPractice;
