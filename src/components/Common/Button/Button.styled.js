import styled from '@emotion/styled';

const StyledButton = styled.button`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.375rem 0.75rem;
  border-width: 0px;
  border-radius: 0.375rem;
  outline: unset;
  transition: all 250ms ease-in-out;
  cursor: pointer;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;
`;

const PrimaryButton = styled(StyledButton)`
  color: rgba(30, 58, 138, 1);
  background-color: rgba(219, 234, 254, 1);

  &:hover {
    background-color: rgba(191, 219, 254, 1);
  }
`;

const LightButton = styled(StyledButton)`
  color: #212529;
  background-color: #f8f9fa;

  &:hover {
    background-color: #e2e6ea;
  }
`;

const Button = { PrimaryButton, LightButton };

export default Button;
