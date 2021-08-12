import styled from '@emotion/styled';

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;

  h1 {
    font-size: 1.5rem;
    font-weight: 600;
    margin: 0.5rem;
  }

  h3 {
    font-size: 1rem;

    a {
      color: rgba(59, 130, 246, 1);
      text-decoration: underline;

      &:hover {
        color: rgba(30, 58, 138, 1);
      }
    }
  }
`;

const Styled = { ErrorContainer };

export default Styled;
