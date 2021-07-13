import styled from '@emotion/styled';
import Button from '../Common/Button';
import NavLink from '../Common/NavLink';

const AsideContainer = styled.aside`
  min-width: ${(props) => (props.isSidebarOpen ? 'auto' : '14rem')};
  z-index: 50;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${(props) => props.theme.mainLayoutBackground};
`;

const AsideMenu = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const AsideMenuLink = styled(NavLink)`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  align-items: center;

  span {
    color: inherit;
  }

  i {
    color: currentColor;
    padding: 0.375rem 0.75rem;
  }
`;

const AsideFooter = styled(Button.LightButton)`
  border-radius: unset;
  font-size: 1rem;
  padding: 1rem 0.5rem;
  justify-content: flex-start;
  gap: 0.5rem;

  i {
    color: currentColor;
    padding: 0.5rem 1rem;
  }
`;

const Styled = {
  AsideContainer,
  AsideMenu,
  AsideMenuLink,
  AsideFooter,
};

export default Styled;
