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
  position: fixed;
  z-index: 50;
  left: 0;
  right: 0;
  background-color: ${(props) => props.theme.mainLayoutBackground};
`;

const Section = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
`;

const RightSection = styled(Section)`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    justify-content: flex-end;
  }
`;

const SearchBarSection = styled.div``;

const Styled = {
  HeaderContainer,
  Section,
  RightSection,
  SearchBarSection,
};

export default Styled;
