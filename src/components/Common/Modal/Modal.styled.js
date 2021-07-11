import styled from '@emotion/styled';

const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(51, 51, 51, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
  overflow-y: auto;
  transition: all 300ms ease-in-out;
  ${(props) =>
    props.open
      ? `opacity: 1;
  pointer-events: auto;`
      : `opacity: 0;
  pointer-events: none;`}
`;

const ModalDialog = styled.div`
  width: 100%;
  background: white;

  @media (min-width: 768px) {
    max-width: 36rem;
    margin: 0.25rem;
    border-radius: 0.25rem;
  }
`;

const ModalContainter = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1rem;
  border-bottom: 1px solid rgba(229, 231, 235, 1);

  h4 {
    margin: 0;
    font-size: 1.125rem;
    color: #111827;
    font-weight: 500;
  }

  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
`;

const ModalBody = styled.div`
  padding: 1rem;
`;

const ModalFooter = styled.div`
  padding: 0.75rem 1rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  border-top: 1px solid rgba(229, 231, 235, 1);
`;

ModalOverlay.displayName = 'ModalOverlay';
ModalDialog.displayName = 'ModalDialog';
ModalContainter.displayName = 'ModalContainter';
ModalHeader.displayName = 'ModalHeader';
ModalBody.displayName = 'ModalBody';
ModalFooter.displayName = 'ModalFooter';

const Styled = {
  ModalOverlay,
  ModalDialog,
  ModalContainter,
  ModalHeader,
  ModalBody,
  ModalFooter,
};

export default Styled;
