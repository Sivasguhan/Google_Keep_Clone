import { render } from "@testing-library/react";
import ImageButton from "./ImageButton";

test('renders with default props if no props are provided', () => {
    const { container } = render(<ImageButton />);
    const imageContainer = container.querySelector('.imageContainer');

    expect(imageContainer).toHaveStyle({
        height: '40px',
        width: '40px',
        padding: '5px'
    })

    const img = container.querySelector('img');
    
    // Check if 'src' attribute is not present
    expect(img).not.toHaveAttribute('src');  
    
    // Check if 'alt' attribute is not present
    expect(img).not.toHaveAttribute('alt'); 
});
