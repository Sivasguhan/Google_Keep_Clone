import { render, fireEvent } from '@testing-library/react';
import TitleInput from './TitleInput';

test('handles key press', () => {
  const handleKeyPressMock = jest.fn();
  const { getByPlaceholderText } = render(<TitleInput handleKeyPress={handleKeyPressMock} />);
  const inputElement = getByPlaceholderText('Enter a title');

  fireEvent.keyDown(inputElement, { key: 'Enter', code: 'Enter' });

  expect(handleKeyPressMock).toHaveBeenCalled();
});