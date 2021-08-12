import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { useHistory, useLocation, Link } from 'react-router-dom';

import SearchBar from '../SearchBar';
import Avatar from '../Common/Avatar';
import ToggleSwitch from '../ToggleSwitch';
import Button from '../Common/Button';

import Styled from './Header.styled';

const Header = ({
  handleSearchVideos,
  isAuthenticated,
  user,
  isDarkMode,
  toggleTheme,
  toggleSidebar,
}) => {
  const history = useHistory();
  const location = useLocation();
  const [keyword, setKeyword] = useState('');

  const handleOnChange = (e) => setKeyword(e.target.value);

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearchVideos(keyword);

      return location.pathname.length > 1 && history.push('/');
    }
  };

  return (
    <Styled.HeaderContainer isDarkMode={isDarkMode}>
      <Styled.Section>
        <Button.LightButton onClick={toggleSidebar}>
          <span className="sr-only">Open aside menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </Button.LightButton>
        <SearchBar value={keyword} onChange={handleOnChange} onKeyDown={handleKeyPress} />
      </Styled.Section>
      <Styled.RightSection>
        <ToggleSwitch
          toggleName="theme-toggle-switch"
          checked={isDarkMode}
          onChange={toggleTheme}
        />
        {isAuthenticated ? (
          <Avatar src={user.avatarUrl} alt="avatar" />
        ) : (
          <Link
            to={{
              pathname: '/login',
              state: { background: location },
            }}
          >
            <Avatar alt="avatar" />
          </Link>
        )}
      </Styled.RightSection>
    </Styled.HeaderContainer>
  );
};

Header.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
  toggleTheme: PropTypes.func.isRequired,
  toggleSidebar: PropTypes.func.isRequired,
  handleSearchVideos: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
  user: PropTypes.objectOf(PropTypes.any),
};

Header.defaultProps = {
  isAuthenticated: false,
  user: {},
};

export default Header;
