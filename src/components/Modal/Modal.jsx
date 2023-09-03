import { Overlay, ModalStyled } from "./Modal.styled"

export const Modal = ({selectedImage, onClose} ) => {


return <Overlay className="overlay" onClick={onClose} >
  <ModalStyled className="modal"  >
    <img src={selectedImage} alt="" />
  </ModalStyled>
</Overlay>
}