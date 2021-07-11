import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { useHistory, useLocation, Link } from 'react-router-dom';
import { useVideoContext } from '../../providers/Video';

import SearchBar from '../SearchBar';
import Avatar from '../Common/Avatar';
import ToggleSwitch from '../ToggleSwitch';
import Button from '../Common/Button';

import { HeaderContainer, HeaderSection } from './Header.styled';
import { useAuthContext } from '../../providers/Auth';

const Header = ({ isDarkMode, toggleTheme, toggleSidebar }) => {
  const history = useHistory();
  const location = useLocation();

  const [keyword, setKeyword] = useState('');

  const {
    dispatch,
    actions: { handleSearchVideos },
  } = useVideoContext();

  const {
    authState: { isAuthenticated, user },
  } = useAuthContext();

  const handleOnChange = (e) => setKeyword(e.target.value);

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearchVideos(keyword)(dispatch);

      return location.pathname.length > 1 && history.push('/');
    }
  };

  return (
    <HeaderContainer>
      <HeaderSection>
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
      </HeaderSection>
      <HeaderSection>
        <div style={{ marginRight: '1rem' }}>
          <ToggleSwitch
            toggleName="theme-toggle-switch"
            checked={isDarkMode}
            onChange={toggleTheme}
          />
        </div>
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
      </HeaderSection>
    </HeaderContainer>
  );
};

Header.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
  toggleTheme: PropTypes.func.isRequired,
  toggleSidebar: PropTypes.func.isRequired,
};

export default Header;
