import styled from '@emotion/styled';

const Container = styled.div`
  width: 100%;

  @media (min-width: 640px) {
    max-width: 540px;
  }

  @media (min-width: 768px) {
    max-width: 720px;
  }

  @media (min-width: 1024px) {
    max-width: 960px;
  }

  @media (min-width: 1280px) {
    max-width: 1140px;
  }
`;

export default Container;
