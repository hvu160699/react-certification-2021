import styled from '@emotion/styled';

import Input from '../Common/Input';

const SearchBarContainer = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const SearchBarWrapper = styled.div`
  position: absolute;
  display: inline-block;
  left: 0;
  right: 0;
`;

const SearchIconWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
  position: absolute;
  z-index: 10;

  svg {
    width: 1rem;
    height: 1rem;
    display: inline-block;
    flex-shrink: 0;
  }
`;

const SearchBarInput = styled(Input)`
  padding-left: calc(1em + 32px);
  min-width: 100%;
  max-width: 100%;
`;

SearchBarContainer.displayName = 'SearchBarContainer';
SearchIconWrapper.displayName = 'SearchIcon';
SearchBarInput.displayName = 'SearchInput';

export { SearchBarContainer, SearchIconWrapper, SearchBarWrapper, SearchBarInput };
