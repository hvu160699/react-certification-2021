import styled from '@emotion/styled';

const Container = styled.div`
  width: 100%;

  @media (min-width: 1280px) {
    max-width: 1280px;
  }
`;

Container.displayName = 'Container';

const Styled = {
  Container,
};

export default Styled;
