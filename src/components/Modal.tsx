import React, { useEffect, useRef, useState } from 'react';
import useToggle from './hooks/useToggle';
import useClickOutside from "./hooks/useClickOutside";
import { images } from "./Images";
import { Main, ModalSection } from "./styles/Modal.styled";
import { ReactComponent as CloseModal} from "../assets/icon-close.svg";

type ActiveModal = {
    modal: boolean;
    setModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const Modal: React.FC<ActiveModal> = ({ modal, setModal }) => {
    const [imgIndex, setImgIndex] = useState<number>(0);
    const modalRef = useRef(null);
    const { toggleEffect } = useToggle();  
    const { clickOutside } = useClickOutside();

    useEffect(() => {
        clickOutside(modalRef, setModal);
    }, []) 

    useEffect(() => {
        if(modal) toggleEffect(imgIndex, "ul.modalImgs > li", "toggle-effect")
    }, [modal, toggleEffect, imgIndex])
    
  return (
    <Main style={{ display: modal ? "block" : "none"}}>
        {modal ? (
            <ModalSection ref={modalRef}>
                <CloseModal
                    className="delete"
                    onClick={() => setModal(false)}
                />
                
                <div className="main-img-container">
                    <div 
                        className="previous"
                        onClick={() => imgIndex >= 1 ? setImgIndex(imgIndex - 1) : null}
                    > 
                        {" < "}
                    </div>
                    <img 
                        alt="main-img"
                        src={require(`../assets/image-product-${imgIndex}.jpg`)}
                    />
                    <div 
                        className="next"
                        onClick={() => imgIndex <= 2 ? setImgIndex(imgIndex + 1) : null}
                    >
                        {" > "}
                    </div>
                </div>
            
                <ul className="modalImgs">
                    {images?.map((img, index) => (
                        <li key={index}>
                            <img
                                className="img-preview"
                                alt={`img-${index}`}
                                onClick={() => {
                                    setImgIndex(index)
                                    toggleEffect(index, "ul.modalImgs > li", "toggle-effect")
                                }}
                                src={require(`../assets/image-${img}`)}
                            />
                        </li>
                    ))}
                </ul>
            </ModalSection>
        ) : null}
    </Main>
  )
}

export default Modal