import styled from '@emotion/styled';

const Button = styled.button`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.25rem;
  color: rgba(156, 163, 175, 1);
  background-color: transparent;
  border-width: 0px;
  border-radius: 0.375rem;
  outline: unset;
  transition: all 250ms ease-in-out;
  cursor: pointer;

  svg {
    width: 1.5rem;
    height: 1.5rem;
  }

  &:hover {
    background-color: #e5e7eb;
  }
`;

export default Button;
