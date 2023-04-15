import styled from "styled-components";

export const MobileSection = styled.section`
    display: none;

    &.active-menu {
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        background-color: #0f0f0fab;
    }

    @media (max-width: 852px) {
        display: block;
    }

    .active #hamburger {
        color: black;
        border-top-color: transparent;
    }

    .active #hamburger::before {
        transform: rotate(135deg);
    }

    .active #hamburger::after {
        transform: rotate(-135deg);
        top: -7px;
    }

    .mobile-active {
        display: block;
    }
`

export const MobileButton = styled.button`
    position: absolute;
    z-index: 6;
    display: flex;
    top: 38px;
    left: 50px;
    font-size: 1rem;
    border: none;
    background: none;
    cursor: pointer;

    @media (max-width: 630px) {
        left: 24px;
    }

    #hamburger {
        color: #69707D;
        display: block;
        border-top: 3px solid;
        width: 25px;
    }
    
    #hamburger::after, #hamburger::before {
        content: "";
        display: block;
        width: 25px;
        height: 3px;
        background-color: currentColor;
        margin-top: 5px;
        transition: .3s;
        position: relative;
    }
    
`

export const MobileMenu = styled.section`
    display: none;
    position: absolute;
    width: 400px;
    height: 100vh;
    top: 0px;
    z-index: 4;
    background-color: white;

    @media (max-width: 515px) {
        width: 100%;
    }

    ul {
        font-size: 22px;
        font-weight: bold;
        padding-top: 85px;
        margin-left: 50px;

        @media (max-width: 515px) {
            margin-left: 30px;
        }

        li {
            width: 100px;
            cursor: pointer;
            margin-top: 20px;
        }
    }
`