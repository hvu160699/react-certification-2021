import React from 'react';

import renderer from 'react-test-renderer';

import Container from './Container.component';

describe('Container', () => {
  it('Shoul render a container that can contain multiply element', () => {
    const container = renderer
      .create(
        <Container>
          <div>Find the button</div>
          <button type="button">Click me</button>
        </Container>
      )
      .toJSON();

    expect(container).toMatchSnapshot();
  });
});
