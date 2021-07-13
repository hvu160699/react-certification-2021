import React from 'react';
import { mount } from 'enzyme';
import Modal from './Modal.component';

describe('Modal component test suit', () => {
  const Child = () => <div>Yolo</div>;
  let component;

  // add a div with #modal-root id to the global body
  const modalRoot = global.document.createElement('div');
  modalRoot.setAttribute('id', 'modal-root');
  const body = global.document.querySelector('body');
  body.appendChild(modalRoot);

  afterEach(() => {
    component.unmount();
  });

  it('Should render without ModalFooter', () => {
    component = mount(
      <Modal open hasFooter={false}>
        <Child />
      </Modal>
    );

    expect(component.find('ModalFooter').exists()).toBeFalsy();
  });

  it('Should render with ModalFooter', () => {
    component = mount(
      <Modal open hasFooter footer={Child}>
        <Child />
      </Modal>
    );

    expect(component.find('ModalFooter').exists()).toBeTruthy();
  });

  it('Should render all the styled components and the children', () => {
    component = mount(
      <Modal hasFooter footer={Child}>
        <Child />
      </Modal>
    );

    expect(component.find('ModalOverlay').exists()).toBeTruthy();
    expect(component.find('ModalDialog').exists()).toBeTruthy();
    expect(component.find('ModalContainter').exists()).toBeTruthy();
    expect(component.find('ModalHeader').exists()).toBeTruthy();
    expect(component.find('ModalBody').exists()).toBeTruthy();
    expect(component.find('ModalFooter').exists()).toBeTruthy();
  });
});
