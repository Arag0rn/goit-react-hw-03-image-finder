import { ImageGalleryItemStyled, ImageGalleryItemImage } from "./ImageGalleryItem.styled";

export const ImageGalleryItem = ({ images, onImageClick}) => {
    return (
        <>
            {images.map(({ id, webformatURL, largeImageURL }) => (
                <ImageGalleryItemStyled key={id}>
                    <div  onClick={() => onImageClick(largeImageURL)}>
                    <ImageGalleryItemImage  src={webformatURL} alt={`Image ${id}`} />
                    </div>
                </ImageGalleryItemStyled>
            ))}
           
        </>
    );
}