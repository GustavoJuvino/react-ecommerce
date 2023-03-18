import React from 'react';
import styled from 'styled-components';
import useToggle from './hooks/useToggle';

const ImagesSection = styled.section`
    margin: 90px 0px 0px 213px;

    nav {
        padding: 0px;

        button {
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
        <nav>
            {images?.map((img, index) => (
                <button key={index}>
                    <img onClick={() => toggleEffect(index, "button", "toggle-effect")}
                        className="img-preview"
                        alt={`img-${index}`}
                        src={require(`../assets/image-${img}`)}
                    />
                </button>
            ))}
        </nav>
    </ImagesSection>
  )
}

export default Images