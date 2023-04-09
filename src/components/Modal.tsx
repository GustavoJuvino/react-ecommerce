import React from 'react';
import { images } from "./Images";
import { Main, ModalSection } from "./styles/Modal.styled";
import { ReactComponent as CloseModal} from "../assets/icon-close.svg";

type ActiveModal = {
    modal: boolean;
};

const Modal: React.FC<ActiveModal> = ({ modal }) => {

  return (
    <Main style={{ display: modal ? "block" : "none"}}>
        {modal ? (
            <ModalSection>
                 <CloseModal className="delete" />
                
                <div className="main-img">
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