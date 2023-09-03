import { Overlay, ModalStyled } from "./Modal.styled"

export const Modal = ({selectedImage} ) => {


return <Overlay className="overlay"  >
  <ModalStyled className="modal"  >
    <img src={selectedImage} alt="" />
  </ModalStyled>
</Overlay>
}