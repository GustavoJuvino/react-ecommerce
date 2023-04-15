import React from 'react';
import Buttons from './Buttons';
import Images from './Images';
import { MainContainer, MainImages, MainTexts, Offer } from './styles/Main.styled';

const Main: React.FC = () => {
  return (
    <MainContainer>
      <MainImages>
        <div className="previous"> 
          {" < "}
        </div>
        <Images />
        <div className="next"> 
          {" > "}
        </div>
      </MainImages>
      <MainTexts>
        <span className="logo-text">SNEAKER COMPANY</span>
        <h1>Fall Limited Edition Sneakers</h1>
        <p>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>

        <div className="price">
          <h2>
            $125.00 <Offer>50%</Offer>
          </h2>
          <p className="old-price">
            <del>$250.00</del>
          </p>
        </div>
        <Buttons />
      </MainTexts>
    </MainContainer>
  )
}

export default Main;