import styled, { keyframes } from "styled-components";

type ExtraStyles = {
    fillColor: string;
    borderColor: string;
}

const underlineEffect = keyframes`
    from {
        transform: scaleX(0);
    }

    to {
        transform: scaleX(1);
    }
`;

  
export const HeaderContainer = styled.header`
    margin: 0px 165px 0px 165px;

    .divider-div {
        display: flex;
        flex-wrap: wrap
    }
`

export const HeaderContent = styled.section`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;

    .Logo {
        cursor: pointer;
    }
    
    nav {
        margin-top: 15px;
        display: flex;
    }

    ul {
        display: flex;
        padding: 0px;
        margin-left: 56.5px;

        li {
            cursor: default;
            color: var(--dark-grayish-blue);
            padding-right: 32px;
        }

        li:hover{
            color: black;
            transition: 0.8s;
        }

        .underline-effect::after{
            content: "";
            display: block;
            width: auto;
            height: 4px;
            background-color: var(--orange);
            margin-top: 45px;
            color: red;
            animation: ${underlineEffect} 0.3s;
            transition: ease-in;
        }
        
    }
`

export const UserContainer = styled.section<ExtraStyles>`
     display: flex;
    
    .Cart {
      fill: ${props => props.fillColor};
    }
  
    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      border:  ${props => props.borderColor};
    }

    .Cart {
        cursor: pointer;
    }

    img, span {
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -o-user-select: none;
        user-select: none;
    }
`

export const CartDiv = styled.div`
    display: grid;
    grid-template-columns: 1fr;

    .Cart {
        grid-row-start: 1;
        grid-column-start: 1;
        z-index: 1;
        margin-right: 46px;
        margin-top: 20px;
    }

    span {
        grid-row-start: 1;
        grid-column-start: 1;
        z-index: 2;
        width: 22px;
        height: 14px;
        margin-top: 14px;
        margin-left: 12px;
        border-radius: 6px;
        background-color: #FF7E1B;
        font-size: 10px;
        font-weight: bold;
        color: white;
        text-align: center;
    }
`

export const Divider = styled.div`
    width: 100%;
    height: 3px;
    background-color: var(--light-grayish-blue);
`