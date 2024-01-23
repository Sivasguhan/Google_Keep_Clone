import { render, screen } from '@testing-library/react';
import ListBox from './ListBox';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);

const initialState = {
    notes: [
        {
            id: 1,
            title: 'Test Note 1',
            description: 'Test Description 1',
        },
    ],
};
const store = mockStore(initialState);

test('renders ListBox component with title and description', () => {
    render(
        <Provider store={store}>
            <ListBox id={1} />
        </Provider>
    );

    const titleInput = screen.getByPlaceholderText('Title....');
    const descriptionTextarea = screen.getByPlaceholderText('Description...');

    expect(titleInput).toBeInTheDocument();
    expect(descriptionTextarea).toBeInTheDocument();

    expect(titleInput.value).toBe('Test Note 1');
    expect(descriptionTextarea.value).toBe('Test Description 1');
});