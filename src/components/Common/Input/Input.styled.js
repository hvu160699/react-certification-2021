import styled from '@emotion/styled';

const StyledInput = styled.input`
  margin: 0;
  border: 1px solid #e5e7eb;
  border-radius: 0.375rem;
  padding: 0.5rem 0.75rem;
  background-color: white;
  appearance: none;
  display: block;
  outline: none;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);

  &:hover,
  &:focus {
    border-color: #9ca3af;
  }
`;

StyledInput.displayName = 'StyledInput';

export { StyledInput };
