import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface SettingsProps {}

const StyledSettings = styled.div`
  color: pink;
`;

export function Settings(props: SettingsProps) {
  return (
    <StyledSettings>
      <h1>Welcome to Settings!</h1>
    </StyledSettings>
  );
}

export default Settings;
