import React from 'react';
import { images } from "./Images";
import { Main } from "./styles/Modal.styled";

type ActiveModal = {
    modal: boolean;
};

const Modal: React.FC<ActiveModal> = ({ modal }) => {

  return (
    <Main style={{ display: modal ? "block" : "none"}}>
        {modal ? (
            <section>
                 <button>Delete</button>
                
                <div>
                    <button> {"<"} </button>
                    <img 
                        alt="main-img"
                        src={require("../assets/image-product-1.jpg")}
                    />
                        <button> {">"} </button>
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
                </section>
        ) : null}
    </Main>
  )
}

export default Modal