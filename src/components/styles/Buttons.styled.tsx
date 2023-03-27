import styled from "styled-components";

export const ButtonsDiv = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 32px;

    button:disabled {
        background-color: #FFAB6A;
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
`
export const CartButton = styled.button`
    transition: 0.3s;
    display: flex;
    align-items: center;
    justify-content: center;
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

`