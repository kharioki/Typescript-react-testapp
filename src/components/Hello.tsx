import * as React from 'react';

import Header from './styles/Header';
import SickButton from './styles/SickButton';

export interface Props {
  name: String;
  enthusiasmLevel?: number;
  onIncrement?: () => void;
  onDecrement?: () => void;
}

function Hello({ name, enthusiasmLevel = 1, onIncrement, onDecrement }: Props) {
  if (enthusiasmLevel <= 0) {
    throw new Error('You could be a little more enthusiastic. :D');
  }

  return (
    <Header>
      <div className="greeting">
        Hello {name + getExclamationMarks(enthusiasmLevel)}
      </div>
      <div>
        <SickButton id="minus" onClick={onDecrement}>
          -
        </SickButton>
        <SickButton id="adder" onClick={onIncrement}>
          +
        </SickButton>
      </div>
    </Header>
  );
}

export default Hello;

// helpers

function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join('!');
}
