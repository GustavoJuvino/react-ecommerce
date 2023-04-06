import React from 'react';
import { images } from "./Images";

type ActiveModal = {
    modal: boolean;
};

const Modal: React.FC<ActiveModal> = ({ modal }) => {

  return (
    <>
        {modal ? (
            <main>
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
            </main>
        ) : null}
    </>
  )
}

export default Modal