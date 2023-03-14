import styled, { keyframes } from "styled-components";

const underlineEffect = keyframes`
    from {
        transform: scaleX(0);
    }

    to {
        transform: scaleX(1);
    }
`;

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    width: 82.8%;
    margin-left: 165px;
    margin-right: 165px;
    margin-top: 20px;

    .Logo, .Cart, img {
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
            transition-timing-function: ease-in;
        }
        

    }
`

export const UserSection = styled.div`
    display: flex;
    justify-content: center;

    .Cart {
        margin-right: 46px;
        margin-top: 20px;
    }

    img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
    }
`

export const Divider = styled.div`
    margin-left: 165px;
    margin-right: 165px;
    width: 82.8%;
    height: 3px;
    background-color: var(--light-grayish-blue);
`