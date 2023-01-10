import styled from 'styled-components';

export const StyledFooter = styled.footer<{ padding: number }>`
  padding: ${({ padding }) => `${padding}px 0`};
  color: blue;

  button {
    background: pink;
  }
`;
