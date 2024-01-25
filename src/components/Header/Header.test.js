import { render, fireEvent } from "@testing-library/react";
import Header from "./Header";

test('typing in the search input updates the searchValue state', () => {
    const setSearchValueMock = jest.fn();
    const { getByPlaceholderText } = render(
        <Header searchValue="" setSearchValue={setSearchValueMock} />
    );
    const searchInput = getByPlaceholderText('Search');
    fireEvent.change(searchInput, { target: { value: 'test search' } });
    expect(setSearchValueMock).toHaveBeenCalledWith('test search');
});


test('should toggle the menu when clicking VscThreeBars icon', () => {
    const setOpenMock = jest.fn();
    const { getByTestId } = render(
        <Header setOpen={setOpenMock} searchValue="" setSearchValue={() => { }} />
    );
    const menuIcon = getByTestId('menu-icon');
    fireEvent.click(menuIcon);
    expect(setOpenMock).toHaveBeenCalledTimes(1);
});
