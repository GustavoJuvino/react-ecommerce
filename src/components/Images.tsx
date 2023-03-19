import React, { useEffect } from 'react';
import useToggle from './hooks/useToggle';
import { ImagesSection } from './styles/Images.styled';

const Images: React.FC = () => {
    const { toggleEffect } = useToggle();  

    const images = [
        'product-1-thumbnail.jpg',
        'product-2.jpg',
        'product-3.jpg',
        'product-4.jpg'
    ];

    useEffect(() => {
        toggleEffect(0, "ul.imageList > li", "toggle-effect");
      }, [toggleEffect])

      function testClick(event: React.MouseEvent){
        console.log(event.target)
      }


  return (
    <ImagesSection>
        <img alt="test" src={require("../assets/image-product-1.jpg")} />
        <ul className="imageList">
            {images?.map((img, index) => (
                <li key={index}>
                    <img 
                        onClick={(event: React.MouseEvent) => {
                            toggleEffect(index, "ul.imageList > li", "toggle-effect")
                            testClick(event);
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