import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ListBox from './ListBox';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import App from '../../../App.js'
import store from '../../../store/index.js';

const handleMockStore = configureMockStore();

const initialState = {
    notes: [
        {
            id: 1,
            title: 'Test Note 1',
            description: 'Test Description 1',
        },
    ],
};
const mockStore = handleMockStore(initialState);

test('renders ListBox component with title and description', () => {
    render(
        <Provider store={mockStore}>
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

test('dispatches addNote action after pressing Enter', () => {
    render(
        <Provider store={mockStore}>
            <App />
        </Provider>
    );
    const inputElement = screen.getByPlaceholderText('Enter a title');
    fireEvent.change(inputElement, { target: { value: 'Sample Title' } });
    fireEvent.keyDown(inputElement, { key: 'Enter' });
    const actions = mockStore.getActions();
    expect(actions[0].payload.title).toEqual('Sample Title');
})

test('renders ListBox after pressing Enter', async () => {
    render(
        <Provider store={store}>
            <App />
        </Provider>
    );
    const inputElement = screen.getByPlaceholderText('Enter a title');
    fireEvent.change(inputElement, { target: { value: 'Sample Title' } });
    fireEvent.keyDown(inputElement, { key: 'Enter' });
    await waitFor(() => {
        const newNoteElement = screen.getByDisplayValue('Sample Title')
        expect(newNoteElement).toBeInTheDocument()
    })
})