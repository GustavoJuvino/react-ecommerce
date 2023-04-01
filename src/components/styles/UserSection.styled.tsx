import styled from "styled-components";

type ExtraStyles = {
    fillColor: string;
    borderColor: string;
}
  

export const UserContainer = styled.section<ExtraStyles>`
    display: flex;
    justify-content: center;

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