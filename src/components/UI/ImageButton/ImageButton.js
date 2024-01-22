export default function ImageButton({imageUrl, altText, height, width, padding }){

    const style = {
        height: height,
        width : width,
        padding: padding
    };

    return(
        <div className="imageContainer" style={style} >
            <img src={imageUrl} alt={altText} />
        </div>
    );
}

ImageButton.defaultProps = {
    height: '40px',
    width: '40px',
    padding: '5px'
};