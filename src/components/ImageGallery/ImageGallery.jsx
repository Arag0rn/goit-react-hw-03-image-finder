import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import { ImageGalleryStyled } from "./ImageGallery.styled";

export const ImageGallery = ({ images, onImageClick, isModalOpen}) => {

    return (
        <ImageGalleryStyled className="gallery">
           <ImageGalleryItem images={images} onImageClick={onImageClick} isModalOpen={isModalOpen} />
        </ImageGalleryStyled>
    );
}