import { render } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import SideBar from "./SideBar";

test('initial state is set correctly', () => {
    const { queryByText } = render(<SideBar />);
    expect(queryByText('Notes')).toBeNull();
    expect(queryByText('Remainder')).toBeNull();
    expect(queryByText('Edit Labels')).toBeNull();
    expect(queryByText('Archive')).toBeNull();
    expect(queryByText('Trash')).toBeNull();
});

test('sidebar reacts to mouse hover', () => {
    const { container } = render(<SideBar open={true}/>);
    const sidebar = container.querySelector('.sidebar'); // Select the nav element
  
    userEvent.hover(sidebar);
    expect(container.querySelectorAll('span')).toHaveLength(5);
  });
