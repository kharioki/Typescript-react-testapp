import * as React from 'react';
import * as enzyme from 'enzyme';
import Hello from './Hello';

it('renders the correct text when no enthusiasm level is given', () => {
  const hello = enzyme.shallow(<Hello name="Daniel" />);
  expect(hello.find('.greeting').text()).toEqual('Hello Daniel!');
});

it('renders the correct text with an explicit enthusiasm of 1', () => {
  const hello = enzyme.shallow(<Hello name="Daniel" enthusiasmLevel={1} />);
  expect(hello.find('.greeting').text()).toEqual('Hello Daniel!');
});

it('renders the correct text with an explicit enthusiasm of 5', () => {
  const hello = enzyme.shallow(<Hello name="Daniel" enthusiasmLevel={5} />);
  expect(hello.find('.greeting').text()).toEqual('Hello Daniel!!!!!');
});

it('throws an error when the enthusiasm level is 0', () => {
  expect(() => {
    enzyme.shallow(<Hello name="Daniel" enthusiasmLevel={0} />);
  }).toThrow();
});

it('throws an error when the enthusiasm level is negative', () => {
  expect(() => {
    enzyme.shallow(<Hello name="Daniel" enthusiasmLevel={-1} />);
  }).toThrow();
});

it('simulate a - button click', () => {
  const hello = enzyme.shallow(<Hello name="Daniel" enthusiasmLevel={2} />);
  hello.find('#minus').simulate('click');
  // const button = hello.find('#minus').simulate('click');
  // expect(button).toHaveBeenCalled();
});

it('simulate a + button click', () => {
  const hello = enzyme.shallow(<Hello name="Daniel" enthusiasmLevel={2} />);
  hello.find('#adder').simulate('click');
  // const button = hello.find('#adder').simulate('click');
  // expect(button).toHaveBeenCalled();
});
