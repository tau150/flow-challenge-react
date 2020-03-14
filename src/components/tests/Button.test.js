import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import Button from '../Button';


describe('Button', () => {

  afterEach(cleanup);

  it('should matches snapshot', () => {
    const { asFragment } = render(<Button />)
    expect(asFragment()).toMatchSnapshot();
  })


  it('should render Button with the correct title', () => {
    const title = 'test title';
    const { getByText } = render(<Button title={title} />)

    expect(getByText(title)).toBeTruthy();

  })

  it('should render Button as disabled', () => {
    const disabled = true;
    const { getByRole } = render(<Button disabled={disabled} />)
    expect(getByRole('button')).toHaveAttribute('disabled')
  })


  it('should call the correct action when is clicked', () => {

    const onClick = jest.fn();

    const { getByRole } = render(<Button type="button" disabled={false} title="test title" handleOnClick={onClick} />)
    fireEvent.click(getByRole('button'));

    expect(onClick).toHaveBeenCalled()
  })
})