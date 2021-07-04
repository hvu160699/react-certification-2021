import React from 'react';

import { fireEvent, render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';

import Button from './Button.component';

describe('Button', () => {
  it('Should render a button with any text', () => {
    const { getByText } = render(<Button>My button</Button>);
    expect(getByText(/.+/s)).toBeInTheDocument();
  });

  it('Shoul render a button that can contain multiply element', () => {
    const button = renderer
      .create(
        <Button>
          <img src={null} alt="img" />
          <span>Img button</span>
        </Button>
      )
      .toJSON();

    expect(button).toMatchSnapshot();
  });

  it('Should triggers function when the button is clicked', () => {
    const onClickFn = jest.fn();
    render(<Button onClick={onClickFn}>Click me</Button>);

    fireEvent.click(screen.getByText(/Click me/i));
    expect(onClickFn).toHaveBeenCalledTimes(1);
  });
});
