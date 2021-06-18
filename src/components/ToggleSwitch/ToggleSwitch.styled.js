import styled from '@emotion/styled';

const TSContainer = styled.div`
  display: flex;

  input:checked + label span {
    left: 100%;
    transform: translateX(-100%);
  }

  label:active span {
    width: 1.25rem;
  }
`;

const TSInput = styled.input`
  height: 0;
  width: 0;
  visibility: hidden;
`;

const TSLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  width: 2rem;
  height: 1rem;
  background: grey;
  border-radius: 6rem;
  position: relative;
  transition: background 250ms;

  span {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 1rem;
    height: 1rem;
    border-radius: 3rem;
    transition: 250ms;
    background: #fff;
    box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);
  }
`;

TSContainer.displayName = 'TSContainer';
TSInput.displayName = 'TSInput';
TSLabel.displayName = 'TSLabel';

export { TSContainer, TSInput, TSLabel };
