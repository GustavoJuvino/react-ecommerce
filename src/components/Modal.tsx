import React, { useEffect, useRef, useState } from 'react';
import { images } from "./Images";
import { Main, ModalSection } from "./styles/Modal.styled";
import { ReactComponent as CloseModal} from "../assets/icon-close.svg";

type ActiveModal = {
    modal: boolean;
    setModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const Modal: React.FC<ActiveModal> = ({ modal, setModal }) => {
    const [src, setSrc] = useState<string>();
    const [index, setIndex] = useState<number>(1);
    const modalRef = useRef(null);

    // We can refactor
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

  return (<Main style={{ display: modal ? "block" : "none"}}>
    {modal ? (
        <ModalSection ref={modalRef}>
            <CloseModal
                className="delete"
                onClick={() => setModal(false)}
            />
                
            <div className="main-img-container">
                <div 
                    className="previous"
                    onClick={() => index > 1 ? setIndex(index - 1) : null}
                > 
                    {" < "}
                </div>
                <img 
                    alt="main-img"
                    src={src ? src : require(`../assets/image-product-${index}.jpg`)}
                />
                <div 
                    className="next"
                    onClick={() => index <= 3 ? setIndex(index + 1) : null}
                >
                    {" > "}
                </div>
            </div>
            
            <ul>
                {images?.map((img, index) => (
                    <li key={index}>
                        <img
                            onClick={(event: React.MouseEvent<HTMLImageElement>) => {
                                setSrc(event.currentTarget.src)
                                setIndex(index);
                            }}
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

export default Modal;