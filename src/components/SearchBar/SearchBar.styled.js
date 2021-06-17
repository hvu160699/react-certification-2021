import styled from '@emotion/styled';

import Input from '../Common/Input';

const SearchBarContainer = styled.div`
  margin-left: 1rem;
  position: relative;
  display: none;

  @media (min-width: 576px) {
    display: block;
  }
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
`;

SearchBarContainer.displayName = 'SearchBarContainer';
SearchIconWrapper.displayName = 'SearchIcon';
SearchBarInput.displayName = 'SearchInput';

export { SearchBarContainer, SearchIconWrapper, SearchBarInput };
