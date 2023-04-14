import styled, { keyframes } from "styled-components";

const dropingMenu = keyframes`
    from {
        opacity: 0;
        height: 0px;
    }

    to {
        opacity: initial;
        height: 256px;
    }
`

const itemEffect = keyframes`
    from {
        opacity: 0;
    }

    to {
        opacity: initial;
    }
`

export const CartMenu = styled.div`
    animation: ${dropingMenu} 0.3s forwards;
    position: absolute;
    top: 105px;
    right: 165px;
    width: 360px;
    height: 256px;
    border-radius: 10px;
    background-color: white;
    box-shadow: 0px 20px 50px -20px #1D2026;

    h3, .empty-cart  {
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -o-user-select: none;
        user-select: none;
    }

    h3 {
        font-size: 16px;
        font-weight: bold;
        text-align: left;
        padding-top: 24px;
        padding-left: 24px;
        padding-bottom: 27px;
        border-bottom: 1px solid var(--grayish-blue);
    }

    .empty-cart {
        position: absolute;
        top: 50%;
        left: 30%;
        font-size: 16px;
        font-weight: bold;
        color: var(--dark-grayish-blue);
        text-align: center;
    }

    button {
        animation: ${itemEffect} 0.8s forwards;
        width: 312px;
        height: 56px;
        margin: 24px 24px 0px 24px;
        background-color: var(--orange);
        border: none;
        border-radius: 10px;
        font-weight: bold;
        font-size: 16px;
        color: white;
        cursor: pointer;
    }

`

export const Item = styled.section`
    animation: ${itemEffect} 0.8s forwards;
    display: flex;
    margin: 24px 24px 0px 24px;
    align-items: center;
    
    img {
        width: 50px;
        height: 50px;
        border-radius: 4px;
    }

    .item-texts {
        display: flex;
    }

    p {
        font-size: 16px;
        line-height: 26px;
        color: var(--dark-grayish-blue);
        margin-left: 16px;
    }

    span {
        font-weight: bold;
        color: black;
        margin-left: 10px;
    }

    .delete {
        margin-left: 18px;
        margin-top: 20px;
        cursor: pointer;
    }
`