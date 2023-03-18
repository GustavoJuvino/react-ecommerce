import React from 'react';
import styled from 'styled-components';
import useToggle from './hooks/useToggle';

const ImagesSection = styled.section`
    margin: 90px 0px 0px 213px;

    ul {
        display: flex;
        padding: 0px;

        li {
            cursor: pointer;
            margin-top: 32px;
            margin-right: 31px;
            border: none;
            border-radius: 15px;
        }
    }

    .img-preview {
        width: 88px;
        height: 88px;
    }

    img {
        width: 445px;
        height: 445px;
        border-radius: 15px;
        background-size: cover;
    }

    .toggle-effect {
        border: 2px solid var(--orange);
        opacity: 0.65;
    }
`

const Images: React.FC = () => {
    const { toggleEffect } = useToggle();  

    const images = [
        'product-1.jpg',
        'product-2.jpg',
        'product-3.jpg',
        'product-4.jpg'
    ];


  return (
    <ImagesSection>
        <img alt="test" src={require("../assets/image-product-1.jpg")} />
        <ul className="imageList">
            {images?.map((img, index) => (
                <li key={index}>
                    <img 
                        onClick={() => toggleEffect(index, "ul.imageList > li", "toggle-effect")}
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