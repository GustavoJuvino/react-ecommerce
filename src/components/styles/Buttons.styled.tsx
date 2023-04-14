import styled from "styled-components";

export const ButtonsDiv = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 32px;

    button:disabled {
        background-color: #FFAB6A;
    }

    @media (max-width: 1330px) {
        display: block;
    }
`
export const Counter = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 157px;
    height: 56px;
    background-color: var(--light-grayish-blue);
    border-radius: 10px;

    button {
        padding-left: 16px;
        padding-right: 16px;
        border: none;
        background-color: transparent;
        font-size: 35px;
        cursor: pointer;
        color: var(--orange);
    }

    span {
        font-size: 16px;
        font-weight: bold;
        color: black;
    }

    @media (max-width: 1330px) {
        width: 200px;
    }
`
export const CartButton = styled.button`
    transition: 0.3s;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
    border: none;
    border-radius: 10px;
    width: 272px;
    height: 56px;
    background-color: var(--orange);
    cursor: pointer;

    .button-text {
        padding-bottom: 26px;
        color: white;
        font-weight: bold;
    }

    .cart-icon {
        fill: white;
        margin-right: 15px;
    }

    @media (max-width: 1330px) {
        margin-top: 20px;
        margin-left: 0px;
        width: 200px;
    }

`