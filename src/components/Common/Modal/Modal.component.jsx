import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import Styled from './Modal.styled';
import Button from '../Button';

const root = document.getElementById('root');

const Modal = ({ title, hasFooter, footer, open, onClose, ...props }) => {
  const modal = useRef(document.createElement('div'));

  useEffect(() => {
    const node = modal.current;

    if (root) root.appendChild(node);

    return () => {
      root.removeChild(node);
    };
  }, []);

  return ReactDOM.createPortal(
    <Styled.ModalOverlay open={open} onClick={onClose}>
      <Styled.ModalDialog onClick={(e) => e.stopPropagation()}>
        <Styled.ModalContainter>
          <Styled.ModalHeader>
            <h4>{title}</h4>
            <Button.LightButton type="button" onClick={onClose}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Button.LightButton>
          </Styled.ModalHeader>
          <Styled.ModalBody>{props.children}</Styled.ModalBody>
          {hasFooter && <Styled.ModalFooter>{footer}</Styled.ModalFooter>}
        </Styled.ModalContainter>
      </Styled.ModalDialog>
    </Styled.ModalOverlay>,
    modal.current
  );
};

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  hasFooter: PropTypes.bool,
  footer(props, propName) {
    if (props.hasFooter && props[propName] === undefined) {
      return new Error(`Please provide a Footer component if hasFooter is true`);
    }
  },
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

Modal.defaultProps = {
  title: '',
  hasFooter: false,
  footer: null,
  open: false,
  onClose: () => {},
};

export default Modal;
