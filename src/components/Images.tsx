import React, { useEffect, useState } from 'react';
import useToggle from './hooks/useToggle';
import { ImagesSection } from './styles/Images.styled';

const Images: React.FC = () => {
    const [src, setSrc] = useState<string>();

    const { toggleEffect } = useToggle();  

    const images = [
        'product-1.jpg',
        'product-2.jpg',
        'product-3.jpg',
        'product-4.jpg'
    ];

    useEffect(() => {
        toggleEffect(0, "ul.imageList > li", "toggle-effect");
      }, [toggleEffect])

  return (
    <ImagesSection>
        <img alt="main-img" src={src ? src : require("../assets/image-product-1.jpg")} />
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
  )
}

export default Images