import React, { useEffect, useState } from 'react';
import Modal from "./Modal";
import useToggle from './hooks/useToggle';
import { ImagesSection } from './styles/Images.styled';

export const images = [
    'product-0.jpg',
    'product-1.jpg',
    'product-2.jpg',
    'product-3.jpg'
];

const Images: React.FC = () => {
    const [modal, setModal] = useState<boolean>(null);
    const [src, setSrc] = useState<string>();
    const { toggleEffect } = useToggle();  

    useEffect(() => {
        toggleEffect(0, "ul.imageList > li", "toggle-effect");
      }, [toggleEffect])

      if(window.innerWidth >= 640){
        console.log(true)
      } else {
        console.log(false)
      }

  return (
    <>
        <ImagesSection>
            <img 
                alt="main-img"
                onClick={() => {
                    if(window.innerWidth >= 640) setModal(true)
                }}
                src={src ? src : require("../assets/image-product-0.jpg")}
            />
            <ul className="imageList">
                {images?.map((img, index) => (
                    <li key={index}>
                        <img 
                            onClick={(event: React.MouseEvent<HTMLImageElement>) => {
                                toggleEffect(index, "ul.imageList > li", "toggle-effect")
                                setSrc(event.currentTarget.src)
                            }}
                            className="img-preview"
                            alt={`img-${index}`}
                            src={require(`../assets/image-${img}`)}
                        />
                    </li>
                ))}
            </ul>
        </ImagesSection>

        <Modal modal={ modal } setModal={ setModal } />
    </>
  )
}

export default Images