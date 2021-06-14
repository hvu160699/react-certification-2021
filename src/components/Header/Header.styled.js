import styled from '@emotion/styled';

const HeaderContainer = styled.header`
  width: 100%;
  height: 4rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  padding: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 576px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  @media (min-width: 1024px) {
    padding-left: 4rem;
    padding-right: 4rem;
  }
`;

const HeaderSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export { HeaderContainer, HeaderSection };
