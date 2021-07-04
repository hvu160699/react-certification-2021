import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const LoadingContainer = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

const LoadingSvg = styled.svg`
  color: #ff0000;
  width: 1.25rem;
  height: 1.25rem;
  margin-right: 0.75rem;
  animation: ${spin} 1s linear infinite;

  circle {
    opacity: 0.25;
  }

  path {
    opacity: 0.75;
  }
`;

const LoadingText = styled.p`
  color: #282828;
  font-size: 1.25rem;
`;

LoadingContainer.displayName = 'LoadingContainer';
LoadingSvg.displayName = 'LoadingSvg';
LoadingText.displayName = 'LoadingText';

const Styled = {
  LoadingContainer,
  LoadingSvg,
  LoadingText,
};

export default Styled;
