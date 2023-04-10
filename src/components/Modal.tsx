import React, { useEffect, useRef } from 'react';
import { images } from "./Images";
import { Main, ModalSection } from "./styles/Modal.styled";
import { ReactComponent as CloseModal} from "../assets/icon-close.svg";

type ActiveModal = {
    modal: boolean;
    setModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const Modal: React.FC<ActiveModal> = ({ modal, setModal }) => {
    const modalRef = useRef(null);

    useEffect(() => {
        let handler = (e: MouseEvent) => {
          if (!modalRef.current?.contains(e.target as Node)) {
            setModal(false)
          }
        };
    
        document.addEventListener("mousedown", (e: MouseEvent) => handler(e));
    
        return () =>
          document.removeEventListener("mousedown", (e: MouseEvent) => handler(e));
    });

  return (
    <Main style={{ display: modal ? "block" : "none"}}>
        {modal ? (
            <ModalSection ref={modalRef}>
                <CloseModal
                    className="delete"
                    onClick={() => setModal(false)}
                />
                
                <div className="main-img-container">
                    <div className="previous"> {" < "} </div>
                    <img 
                        alt="main-img"
                        src={require("../assets/image-product-1.jpg")}
                    />
                    <div className="next"> {" > "} </div>
                </div>
            
                <ul>
                    {images?.map((img, index) => (
                        <li key={index}>
                            <img
                                alt={`img-${index}`}
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